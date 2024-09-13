const arrayStrings = ["First", "Second", "Third", "Fourth"]

const arrayOfObjects = [
    {firstName: "Mirza", company: "IOD"}, 
    {firstName: "John", company: "IOD"},
    {firstName: "Will", company: "IOD"}
]

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 3, title: "Winter pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Snow Pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Summer Pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Spring", price: 49.95, category: 'Pants' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
]

let pants = products.find((item)=> item.category == "Pants")
let shirts = products.find((item)=> item.category == "Shirts")
console.log(pants)
console.log(shirts)

let pantsFiltered = products.filter((item) => item.category == "Pants")
let shirtsFiltered = products.filter((item)=> item.category == "Shirts")
console.log(pantsFiltered)
console.log(shirtsFiltered)

let productsUnder50 = products.filter((item)=> item.price < 50)
console.log(productsUnder50)

