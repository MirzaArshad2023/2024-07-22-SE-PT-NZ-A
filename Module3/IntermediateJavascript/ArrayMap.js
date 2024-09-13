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

const titles = products.map((item) => item.category
)

let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(raisedPrices)

products.sort( (product1, product2) => product2.price - product1.price )

console.log(products)

products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )

console.log(products)