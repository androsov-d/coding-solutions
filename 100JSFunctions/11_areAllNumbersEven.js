function areAllNumbersEven(numbers) {
    for (let number of numbers)
    {
        if (number % 2 != 0) {
            return false;
        }
    }
    
    return true;
}
