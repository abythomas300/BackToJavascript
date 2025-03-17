var readline = require('readline-sync');
function PrintPrimeNumberOnly(){
    let n = parseInt(readline.question("Upto how much?"));

here:    for(let i = 2; i<=n; i++){
            for(let j = 2; j<i; j++){
              if(i % j ==0){
                continue here;
              }
              console.log(i);
          }
  
     }

    }

    PrintPrimeNumberOnly();