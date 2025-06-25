//Async: A keyword infront of function.
//       It will make the function return it's value wrapped in a promise.



//Example: When a normal function is made async
// async function getName() {  //add async keyword
//     return "Aby Thomas";    //returns the string wrapped inside a promise
// }

// const promise = getName();  // main method is called and stores in a variable for ease
// promise.then((data)=>{console.log(data)}) // used .then handler to log the data argument sent by the promise



//Example: When a normal function is made async and extracting only the value inside the promise
// async function getName() {  //add async keyword
//     return "Aby Thomas";    //returns the string wrapped inside a promise
// }

// const promise = getName();  // main method is called and stores in a variable for ease.
// promise.then((data)=>{console.log(data)}) // used .then handler to log the data argument sent by the promise.



// What if main function is returs a promise itself?
// Will that promise will be wrapped inside the wrapper promise when returning??   Answer: NO
// Promise inside the main function will be returned as a itself.



//Example:
function getName() {                             // main function.
    return new Promise((resolve, reject)=>{      // returns a promise.
        setTimeout(()=>{                         // simulating delay.
            resolve("Aby Thomas");               // resolve() method sending execution result to method call statement.
        }, 3000)
    });
}



const promise = getName();                      // main method invoke
promise.then((data)=>{                          // handling promise using .then(), receiving execution result send by resolve() method.
      
    console.log(data);                         // logging out the execution result send by resolve() method.
})