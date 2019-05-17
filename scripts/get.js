"use strict"

function get(request) {
    return fetch(request)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
}
