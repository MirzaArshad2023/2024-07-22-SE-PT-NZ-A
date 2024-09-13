const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
    ]

let totalPrice = 0;

//totalPrice = products[0].price + products[1].price + products[2].price

products.forEach((item)=> totalPrice =  totalPrice + item.price)

const totalPriceofProducts = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
const totalQuantityofProducts = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.quantity, 0)

console.log(totalPrice)
console.log(totalPriceofProducts)
console.log(totalQuantityofProducts)
