//Sample APIs
//API: https://datausa.io/api/data?drilldowns=Nation&measures=Population
//API: https://dog.ceo/api/breeds/image/random

let imageEl = document.querySelector("#image-el");
let imageLink;
fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        return response.json();         // converting body of response into .json format. // .json() will return a promise with the converted result as a resovle argument
    })
    .then(function(readableJsonData) { // converted result is passed into 
        console.log(readableJsonData);
    })
    .catch(function(error) {
        console.log("Error found:::", error);
    })

