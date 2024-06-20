function isSameDay(date1, date2) {

    const firstDate = getDayMonthYear(date1);
    const secondDate = getDayMonthYear(date2);

    if (JSON.stringify(firstDate) === JSON.stringify(secondDate)) {
        return true;
    } else return false;

    function getDayMonthYear (date) {
        return {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }
}
