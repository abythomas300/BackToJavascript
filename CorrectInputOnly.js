var readline = require('readline-sync');
function Ask(){
    do{
        var inp = readline.question("Input a number greater than 100:");
    }while(inp<=100 && inp!=null);
}

Ask();
console.log("Thank You.")