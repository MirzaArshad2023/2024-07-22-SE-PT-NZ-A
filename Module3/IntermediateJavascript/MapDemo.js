let student = {
    univeristy: "AUT",
    Country: "NZ"
}

let student2 = student

let customer = {
    "customerID": 1,
    "location": "USA"
}

let Orders = {
    "OrderID": "order1234",
    "OrderDate": "2024-08-28"
}


const newMap = new Map()
newMap.set("firstName", "Mirza")
newMap.set("Location", "Auckland")

newMap.set(student, "021024234234")
newMap.set(customer, Orders)

console.log(newMap.size)

console.log(newMap.get("Location"))
console.log(newMap.get(customer))
console.log(newMap.has("Mirza"))
console.log(newMap.get(student2))
console.log(newMap)

newMap.delete(customer)
console.log(newMap)
newMap.clear()
console.log(newMap)