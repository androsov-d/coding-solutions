function mostRepetitions(string1, string2, letter) {
    
    if (counting(letter, string1) >= counting(letter, string2)) {
        return string1;
    } else return string2;

    function counting(letter, str) {
        let count = 0;

        for (const char of str) {
            if (char === letter) {
                count++;
            }
        }

        return count;
    }
}
