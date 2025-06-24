// Promise: is a built in JS object that has values not yet generated but will be in the future.
// Cure for callback hell.



//The two actors: Promise Maker & Promise Receiver
//Promise Maker(probably a function): "I do not have the actual data, it may take time" (when pending state)
//                                  : "However, here is a Promise object"
//Promise Receiver(function invoke) : Receives the promise object



//States:
//pending --> Default State. When first returned a promise object, it is in this state.
//resolve --> Job completed, the logic is executed successfully.
//reject -->  Job completed, the logic is executed successfully.



//Asynchronous function when Promise is not used: Main function returns undefined initially, then the logic execution result.
// function getTime() {
//     setTimeout(function(){
//         console.log("Time fetched successfully.")
//     }, 5000);
// }
// console.log(getTime());
// When promise is used, main function returns Promised object with <pending> state, then the logic execution result.



function getWeather() {
    return new Promise(function(resolve, reject) {
        console.log("Connecting to myweatherapi.com") 
        setTimeout(function() {                                   //Async logic 
            resolve("Rainy 🌧️");
            reject("Unable to fetch data.")
        }, 5000);
    });
}

// Standard way of handling promise callbacks
function onSuccess(weatherData) {                 //Saperate definition of resolve callback
    console.log("Weather looks:"+weatherData)
}

function onError(errorMsg) {                      //Saperate definition of reject callback
    console.log("Weather looks:"+errorMsg)
}

getWeather().then(onSuccess, onError); 



//traditional way of handling promise callbacks
// let promise = getWeather();
// promise.then(function(weatherData){
//     console.log("Weather looks:"+weatherData)
// }, function(errorMsg){
//     console.log("Weather looks:"+errorMsg)
// })

//.then() takes 2 parameters:
//para1 --> function to handle resolve()
//para2 --> function to handle reject()
