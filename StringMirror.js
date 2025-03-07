var readline = require('readline-sync')
var word = readline.question('Enter a word:' );
console.log('You have entered the word: '+word);
var l = word.length;
console.log('Your word is '+l+' characters long');
var i = l;
var j = 1;

shrink(word);
grow(word);

function shrink(word){
    while(i>=1){
        console.log(word.substring(0,i));
        i--;
    }
}

function grow(word){
    while(j<=l){
        console.log(word.substring(0,j));
        j++;
    }
}