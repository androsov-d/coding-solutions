function isSortedAndHow(array) {
  const originalArray = [...array];
  const sortedArray = array.sort((a, b) => a - b);
  
  if (sortedArray.every((value, index) => value === originalArray[index])) {
      return "yes, ascending";
    } else if (sortedArray.reverse().every((value, index) => value === originalArray[index])) {
      return "yes, descending";
    } else {
      return "no"; 
    }
}
