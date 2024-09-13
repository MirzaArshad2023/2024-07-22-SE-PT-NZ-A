//let array1 = ["red", "blue", "voilet"] //array

//destructuring

let colors =  ["red", "blue", "voilet"]
let [redColor, blueColor, voiletColor] = colors

console.log(redColor)
console.log(blueColor)
console.log(voiletColor)

let peoples = [{name:"Will"}, {name: "Smith"}, {name: "John"}]

let [firstObj] = peoples

console.log(firstObj)

let Customer = {
    firstName : "Will",
    CustomerID : "123456"
}


let {firstName, CustomerID} = Customer

console.log(CustomerID)


const [jcFirst = 'Unknown', jcLast, jcTitle = 'Consul'] = ['Julius', 'Caesar']
console.log(jcLast)
console.log(jcTitle)