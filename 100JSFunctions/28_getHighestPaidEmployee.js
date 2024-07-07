function getHighestPaidEmployee(employees, department) {
    const departmentEmployees = employees.filter(employee => employee.departmentId === department);
    
    if (departmentEmployees.length === 0){
        return undefined;
    } else return departmentEmployees.sort((a,b) => b.salary - a.salary)[0].name;

}
