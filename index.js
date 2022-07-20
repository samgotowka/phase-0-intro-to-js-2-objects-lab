// Write your solution in this file!
var employee = new Object();

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({},employee,{[key]: value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value) {
    Object[key] = value
    return Object
}
function deleteFromEmployeeByKey(Object, key) {
    var newObj = {...Object}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key]
    return object
}