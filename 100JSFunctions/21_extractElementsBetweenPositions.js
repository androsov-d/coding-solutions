function extractElementsBetweenPositions(numbers, n, m) {
    if (n < m) {
        return numbers.slice(n, m+1);
    } else return numbers.slice(m, n+1);
}
