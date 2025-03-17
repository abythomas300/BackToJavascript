const reverseString = function(inputString) {
    let result = inputString.split('').reverse().join('');
    return result;
};

reverseString('Something')