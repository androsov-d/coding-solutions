function compareSets(setA, setB) {
  const solution = {
    onlyA: new Set(),
    onlyB: new Set(),
    union: new Set([...setA, ...setB])
  }

  for (const value of solution.union) {
     if (setA.has(value) && !setB.has(value)) {
        solution.onlyA.add(value);
     } else if (!setA.has(value)) {
        solution.onlyB.add(value)
     }
  }

  return solution;

}
