"use strict"

function get(request) {
    return fetch(request)
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((data) => data)
        .catch((error) => error);
}
