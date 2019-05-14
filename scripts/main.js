"use strict"

function getAttractions() {
    const URL = 'https://touringplans.com/magic-kingdom/attractions.json';
    const requestHeaders = {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
    }

    const request = new Request(URL, requestHeaders);

    get(request)
    .then((response) => {
        addItem(response);
    });
}

function addItem(item) {
    const attractionsList = document.getElementById('attractionsList');
    
    const attractionItem = document.createElement('li');
    attractionItem.textContent = item.name;
    
    attractionsList.append(attractionItem);
}

getAttractions();