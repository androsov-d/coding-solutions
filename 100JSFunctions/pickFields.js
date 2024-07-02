function pickFields(data, fields) {
    const output = {};

    for (const key in data){
        if (fields.includes(key)){
            output[key] = data[key];
        }
    }

    return output;
}
