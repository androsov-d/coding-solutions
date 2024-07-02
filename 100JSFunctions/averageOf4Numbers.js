function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return [...arguments].reduce((a, b) => a + b) / 4;
}
