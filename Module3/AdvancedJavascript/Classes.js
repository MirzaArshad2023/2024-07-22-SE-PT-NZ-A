/*let Student = {
    firstName: "Mirza",
    lastName: "Arshad"
}*/

class Student
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName()
    {
        return this.firstName + " " + this.lastName
    }
    getScore()
    {
        return Math.floor(Math.random() * 8)
    }
    getStudentWork()
    {
        let workerObj = new worker(this.getFullName())
        return workerObj.getWork()
    }
}
class worker
{
    constructor(name)
    {
        this.name = name
    }
    getWork()
    {
        return "Work"
    }
}
let student1 = new Student("Mirza", "Arshad")
let student2 = new Student("Will", "Smith")
let student3 = new Student("Tom", "Hardy")

console.log(student1.getFullName())
console.log(student2.getFullName())
console.log(student3.getFullName())