// var readline = require('readline-sync');
// var word = readline.question('Enter a word: ');
var word = "Greetings";
console.log('User has entered the word: '+word);
var l = word.length;
console.log(l);
for(var i=l;i<=0;i--){
    var ls = word.substring(0,i)
    console.log(ls);
}
console.log(word);