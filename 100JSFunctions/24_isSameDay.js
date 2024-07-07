function isSameDay(date1, date2) {
    
    function getDayMonthYear (date) {
        return {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }

    function compareDates (date1, date2) {
        return JSON.stringify(date1) === JSON.stringify(date2);
    }

    const firstDate = getDayMonthYear(date1);
    const secondDate = getDayMonthYear(date2);

    return compareDates(firstDate, secondDate);

}
