// - - - Objects and functions - - -
// let person = {
//     name: "Aby Thomas",
//     age: 21,
//     country: "India"
// }

// function logData() {
//     console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
// }

// logData();



//- - -if else - - -
// let age = 15;
// if(age < 6) {
//     console.log("FREE")
// } else if(age < 18) {
//     console.log("CHILD DISCOUNT")
// } else if(age < 26 ){
//     console.log("STUDENT DISCOUNT")
// } else if(age < 67) {
//     console.log("FULL PRICE");
// } else {
//     console.log("SENIOR CITIZEN DISCOUNT");
// }



//- - -for loop- - -
// let largestCountries = ["India", "China", "USA", "Indonesia", "Pakistan"];
// for(let i = 0; i < largestCountries.length; i++) {
//     console.log("- "+largestCountries[i])
// }



//  // array opearations
// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];
// largeCountries.shift(); 
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");
// console.log(largeCountries);


// logical operations feat. Friday the 13th
// let dayOfMonth = 13;
// let weekday = "Friday";
// if((dayOfMonth === 13) && (weekday === "Friday")) {
//     console.log("RUN!!! 😱")
// }



//CALLBACK: A function that we pass as an argument inside another function.

//Example 1: Simple snippet to show normal callback working
// function avengersAssemble(call) {
//     console.log("The Director of Avengers is calling them.");
//     setTimeout(()=>{
//         console.log("The avengers are suiting up");
//         console.log("The Avengers are ready to go!");
//         call();
//     }, 5000);
// }

// function startWar() {
//     console.log("Avengers are fighting the aliens");
//     console.log("Avengers WON!!");
    
// }

// //function calling
// avengersAssemble(startWar);


// function orderPizza(callback) { 
//     console.log("Ordering a pizza.");
//     console.log("Order placed.");
//     setTimeout(()=>{
//         console.log("Pizza delivered.");
//         callback(); 
//     }, 2000);
// }

// function eatPizza() {
//     console.log("I am eating the pizza");
// }

// orderPizza(eatPizza);

//Harcoding a callback function without passing it as an argument
// function orderPizza() {
//     console.log("Ordering a pizza.");
//     console.log("Order placed.");
//     setTimeout(()=>{
//         console.log("Pizza delivered.");
//         eatPizza();
//     }, 2000);
// }

// function eatPizza() {
//     console.log("I am eating the pizza");
// }

// orderPizza();



//Example 1 to show difference: Passing as argument vs hardcoding callback functions
// function diffuseBomb(callback) {
//     console.log("Time started!");
//     setTimeout(()=>{
//         callback();
//     }, 3000)
// }

// function cutRedWire() {
//     console.log("Wrong Wire! 💥"); 
// }

// function cutGreenWire() {
//     console.log("Bomb defused successfully! 🟩");
// }

// diffuseBomb(cutRedWire);
// diffuseBomb(cutGreenWire);
//Conclusion: When NOT harcoding, we can pass any function, not just a particular one. 


//Example 2 to show difference: Passing as argument vs hardcoding callback functions
// function saveWorld(callback) {
//     console.log("🟢Mission Started.");
//     setTimeout(() => {
//         console.log("✅Mission Successfull.");
//         callback("Iron Man", "Spider Man");  //invokes 'celebrate()'
//     }, 5000);
// }
// function celebrate(hero, sidekick) {
//     console.log(`${hero} and ${sidekick} saved the world! Anyone wants Shawarma?!`);
// }

// saveWorld(celebrate);

//Example 2: but passing arguments inside the first function instead of second -> Makes it more flexible and reusable
function saveWorld(callback, hero, sidekick) {
    console.log("🟢Mission Started.");
    setTimeout(() => {
        console.log("✅Mission Successfull.");
        callback(hero, sidekick);  //invokes 'celebrate()'
    }, 5000);
}
function celebrate(hero, sidekick) {
    console.log(`${hero} and ${sidekick} saved the world! Anyone wants Shawarma?!`);
}

saveWorld(celebrate, "Dr.Strange", "Wong");