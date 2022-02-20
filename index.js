const employee = {
    name: "Chris",
    streetAddress: "2 west end Ave"
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, newAddress){
    const newemployee = {...employee};
    newemployee.streetAddress = newAddress;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newAddress){
    employee.streetAddress = newAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}
