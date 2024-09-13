const sampleWeakMap = new WeakMap()


let trainer = {
    "Institute": "IOD",
    "Location": "Remote"
}
let customer = {
    "CustomerName": "Bill"
}
let Address = {
    "StreetName": "Windsor",
    "Country": "UK"
}
sampleWeakMap.set(trainer, "Mirza")
sampleWeakMap.set(customer, Address)
console.log(sampleWeakMap.get(trainer))
console.log(sampleWeakMap.get(customer))
sampleWeakMap.delete(customer)
console.log(sampleWeakMap.has(customer))
trainer = null
console.log(sampleWeakMap.has(trainer))