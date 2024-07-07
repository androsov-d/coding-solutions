function getMaxMovingDistance(budget, weight, cost) {
    const costPerKm = (cost / 100) * (weight / 10);
    const maxKilometres = budget / costPerKm;

    return maxKilometres;
}
