function diffArrays(numbers1, numbers2) {
    
    function isNumberInArray (number, array) {
        return array.includes(number) ? true : false;
    }
    
    const diffArray = [];
    
    for (const number of numbers1) {
        if (!isNumberInArray(number, numbers2)) {
            diffArray.push(number);
        }
    }
    
    for (const number of numbers2) {
        if (!isNumberInArray(number, numbers1)) {
            diffArray.push(number);
        }
    }

    return diffArray;
}
