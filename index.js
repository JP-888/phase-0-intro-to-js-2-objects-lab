// Write your solution in this file!

const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value)    {
    return Object.assign({}, employee, {[key]: value})    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)   {
    employee[key] = value
    return employee 
}

function deleteFromEmployeeByKey(employee, key)  {
    let copy = Object.assign({}, employee)
    delete copy [key]
    return copy 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}