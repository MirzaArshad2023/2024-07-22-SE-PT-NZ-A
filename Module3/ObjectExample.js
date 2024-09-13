let person = {
    firstName : "Mirza",
    lastName  : "Arshad",
    company   : "IOD",
    country   : "New Zealand",
    city      :  "Auckland",
    postcode  : 600,
    mobile    : "02123423423",
    isDirector : false,
    "has a dog" : "no"
    
}

console.log(person.lastName)
console.log(person["company"])
console.log(person["has a dog"])

console.log(person)
person.car = true
person.isDirector = true
console.log(person)


const tv = { // object starts here
    brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
    size: "55-inch", // values can be any data type
    model: 2023, // multiple key-value pairs are separated by commas
    resolution: "4K", // the comma on the last key-value pair can be omitted
    turnOn: function(){
        console.log("TV Turned on")
    }
    } // object ends here. All data is stored in tv variable.
tv.isPopular = true

console.log(tv)
tv.turnOn()