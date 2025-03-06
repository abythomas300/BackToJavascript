let f = function(name="Jeff"){
    console.log("My name is "+name+".");
};
var i = undefined;
f(i);



function sample(){
    return "Can this function be assigned to a variable?";    
}
var s = sample();
console.log(s);

let copy = sample;
copy();