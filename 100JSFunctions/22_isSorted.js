function isSorted(numbers) {
  const originalArray = [...numbers];
  const sortedArray = numbers.sort((a, b) => a - b);
  
  if (sortedArray.every((value, index) => value === originalArray[index])) {
      return true;
    } else if (sortedArray.reverse().every((value, index) => value === originalArray[index])) {
      return true;
    } else return false;
    
}
