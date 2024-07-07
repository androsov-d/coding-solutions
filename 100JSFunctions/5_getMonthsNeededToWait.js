function getMonthsNeededToWait(index1, index2) {
    if (index2 >= index1) {
        return index2 - index1;
    } else return (12 - index1) + index2;
}
