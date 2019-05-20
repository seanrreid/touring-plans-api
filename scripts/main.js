"use strict"

const proxy = 'http://my-little-cors-proxy.herokuapp.com/';

function getAttractions() {
    const URL = `${proxy}https://touringplans.com/magic-kingdom/attractions.json`;
    const requestHeaders = {
            method: 'GET'
        }

    const request = new Request(URL, requestHeaders);

    get(request)
    .then(response => {
        addAttractionsToList(response);
    });
}

function addAttractionsToList(items) {
    const attractionsList = document.getElementById('attractionsList');
    
    items.map((item) => {
        const attractionItem = document.createElement('li');
        const attractionLink = document.createElement('a');
        attractionLink.setAttribute('href', `https://touringplans.com/magic-kingdom/attractions/${item.permalink}.json`);
        attractionLink.textContent = item.name;
        attractionItem.append(attractionLink);
        
        attractionsList.append(attractionItem);
    })
}

function getAttractionInfo(attraction) {
    const URL = `${proxy}${attraction.href}`;

    get(URL)
    .then(response => {
        const attractionInfo = document.createElement('p');
        const openDate = new Date(response.opened_on);
        const attractionText = `${response.name} opened on ${openDate.toLocaleDateString("en-US")}`;
        attractionInfo.textContent = attractionText;

        attraction.parentNode.append(attractionInfo);
    })
}

document.addEventListener('click',function(e){
    if(e.target && e.target.href !== undefined) { 
        e.preventDefault();
        getAttractionInfo(e.target);
    }
});

const clickMe = document.getElementById('clickMe');
const hideMe = document.getElementById('hideMe');

clickMe.addEventListener('click', function(e){
    e.preventDefault;

    if (hideMe.style.display === 'none') {
        hideMe.style.display = 'block'
    } else {
        hideMe.style.display = 'none'
    }
})