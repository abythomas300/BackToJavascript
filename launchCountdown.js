var readline = require('readline-sync');

function startCountdown(){
    let x = 10;
    while(x>=0){
        if(x === 10){
            console.log(`Countdown ${x}`);
        }else if(x === 0){
            console.log(`Blast off!`);
        }else{
            console.log(x);
        }
        x--;
    }
}

startCountdown();