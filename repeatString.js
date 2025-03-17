const repeatString = function(inputString, inputTimes) {
    let x = 1;
    let result = '';
    if(inputTimes >= 0){
        while(x <= inputTimes){
            result += inputString;
            x++;
        }
        return result;
    }else if(inputTimes < 0){
        return 'ERROR';
    }
};

repeatString('hey',3);