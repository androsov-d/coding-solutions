function arrayToObject(strings) {
  const output = {};
  
  strings.forEach((value, index) => {
    if (!(value in output)) {
      output[value] = index;
    }
  });

  return output;
}
