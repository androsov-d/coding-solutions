function addDays(initialDate, daysCount) {
    return new Date(initialDate.valueOf() + daysCount * 86400000);
}
