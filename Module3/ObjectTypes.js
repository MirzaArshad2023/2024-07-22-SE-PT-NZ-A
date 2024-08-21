let Student = { //object literals
    firstName : "James",
    schoolName : "XYZ",
    visaStatus: "Citizen",
    City: "Auckland",
    postcode: 600,
    "firstName": "Winchester",
    "2": "Two",
    2: "Three"

}

let person = {} //object literals
let Employee = new Object()

person.country = "AU"

console.log(Student)
console.log(person)

Employee.employer = "ABC Corp"
Employee.StaffCount = 200

console.log(Employee)

Student.City = "Wellington"
Student.location = "NSW"
console.log(Student)

delete Student.visaStatus
delete Student.schoolName
delete Student.postcode

console.log(Student)
console.log(Student["2"])
console.log(Student[2])

for(let x in Student)
{
    console.log("Name of key:" + x)
    console.log("Value of key:" + Student[x])
}