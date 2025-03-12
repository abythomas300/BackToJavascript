const animals = ["Octopus","Himalayan Ass", "Non Flying Mammoth","Flying Mammoth"];
const upperanimals = animals.map(toUpper);
console.log(upperanimals);

function toUpper(someString){
    return someString.toUpperCase();
}

//.map(function_here) is used to do some operation on each elements in  the array(or any collection) datastructure.
//it creates a copy, not operate on the current data structure itself.