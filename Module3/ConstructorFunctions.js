function Student(firstName, Institute, location)
{
    this.firstName = firstName
    this.Institute = Institute
    this.location = location
    this.doWork = () =>
    {
        console.log('Doing work')
    }
}

let student1 = new Student("Mirza", "IOD", "Auckland")
let student2 = new Student("Bruce", "IOD", "Wellington")
let student3 = new Student("Wills", "IOD", "Christchurch")
let student4 = new Student("Grace", "IOD", "queenstown")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
student1.doWork()