function everyNPositions(message, step) {
    let result = "";
    
    for (let i = 0; i < message.length; i++) {
        if (i % step === 0) {
            result += message[i];
        }
    }

    return result;
}
