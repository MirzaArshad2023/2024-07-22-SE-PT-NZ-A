let x = 10
let y = x

console.log(`value of x is ${x}`)
console.log(`value of y is ${y}`)

x = x + 1
y = y + 3

console.log(`value of x is ${x}`)
console.log(`value of y is ${y}`)

let person1 = {

    firstName : "Mirza",
    company: "IOD"
}

let person2 = {}

person2 = person1

console.log(person1)
console.log(person2)

person2.firstName = "Smith"
person2.company = "abc"

console.log(person1)
console.log(person2)

person1.firstName = "ABC"
person1.company = "Microsoft"

console.log(person1)
console.log(person2)