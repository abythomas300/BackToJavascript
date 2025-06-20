let playerName = "Aby"
let playerScore = 79000;

//Objects resembles array which is used to store elements that are connected to gether ( ELEMENTS not Values).

// let player = {
//      playerName : 'Aby Thomas',
//      playerScore : 79000
// };

// console.log(player.playerName);
// console.log(player.playerScore);

//Objects are key value pairs that we use when we have multiple variables that belongs to something similar context

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     length: 60,
//     creator: "Per Harland Borgen",
//     difficultyLevel: 3,
//     isFree: true,
//     tags: ["html, css"],
//     welcomeMessage() {
//         console.log("Welcome to the free course.")
//     }
// }


let player = {
    name: "Aby Thomas",
    age: 20,
    status: true,
    greet: function(){
        console.log("Aby Thomas saying hello!");
    }
}

console.log(player.name);
console.log(player.age);
console.log(player.status);
player.greet();



