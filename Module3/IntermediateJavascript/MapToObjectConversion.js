const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
    ])

    console.log(priceMap)

    let priceObject = Object.fromEntries(priceMap.entries())

    console.log(priceObject)

const studentObj = {
    "firstName": "Mirza",
    "Location": "Auckland",
    "Country": "New Zealand"
}
console.log(studentObj)
const studentMap = new Map(Object.entries(studentObj))
console.log(studentMap)