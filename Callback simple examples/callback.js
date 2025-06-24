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
// function saveWorld(callback, hero, sidekick) {
//     console.log("🟢Mission Started.");
//     setTimeout(() => {
//         console.log("✅Mission Successfull.");
//         callback(hero, sidekick);  //invokes 'celebrate()'
//     }, 5000);
// }
// function celebrate(hero, sidekick) {
//     console.log(`${hero} and ${sidekick} saved the world! Anyone wants Shawarma?!`);
// }

// saveWorld(celebrate, "Dr.Strange", "Wong");


// Variation: Passing more than one callback function
function task1(callback1, callback2) {
    console.log("Task 1 started execution.");
    setTimeout(()=>{
        console.log("Task 1 execution complete.");
        callback1(); //invoke task3
        callback2(); //invoke task5
    }, 5000)
}

function task2() {
    console.log("Task 2 started execution.")
    console.log("Task 2 complete execution.")
}

function task3() {
    console.log("Task 3 started execution.")
    console.log("Task 3 complete execution.")
}

function task4() {
    console.log("Task 4 started execution.")
    console.log("Task 4 complete execution.")
}

function task5() {
    console.log("Task 5 started execution.")
    console.log("Task 5 complete execution.")
}

task1(task3, task5);
task2();
task4();