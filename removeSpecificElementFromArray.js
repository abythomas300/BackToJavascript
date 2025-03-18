const removeFromArray = function(inputArray, inputElement) {
    const resultArray = [];
    let x = 0;
    while(x < inputArray.length){
      if(inputArray[x] !== inputElement){
        resultArray.push(inputArray[x]);
        
      }
      x++;
    }
    return resultArray;
};

removeFromArray(['apple', 'orange', 'watermelon', 'pineapple'], 'watermelon');

//Input an array and that particular element which you want to delete from the array.
//Function returns a new array without the targeted element.
//Deletes and returns array WITHOUT ANY IN-BUILT function.(excluding array.push())