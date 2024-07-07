function halfAndHalf(text) {
    const firstHalf = text.slice(0, text.length / 2);
    const secondHalf = text.slice(text.length / 2, text.length);
    const result = firstHalf.toLowerCase() + secondHalf.toUpperCase();

    return result;

}
