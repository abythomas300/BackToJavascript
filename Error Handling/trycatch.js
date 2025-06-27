try {
    function add(num1, num2) {
    return num1 + num23;  // a reference error happens here ⚠️
    }

    console.log("Result is:", add(10,20));
} catch(err) {          // that error is passed into this 'err' parameter ✅
    console.log(err.message);
}

// 1. An error happens inside the try block
// 2. That error is passed to catch block
// 3. Parameter ('err' in this code) will receive that error argument
// 4. errorArgument.message will contain the error message
// Try Catch blocks work together and prevents the abnormal stopping of the program incase of an error

// We can also explicity throw an error using 'throw new' keywords when we want some condition to be considered as an error.