function getDevelopers(employees) {
    const developers = [];

    for (const employee of employees) {
        if (employee.job === 'developer') {
            developers.push(employee);
        }
    }

    return developers;
}
