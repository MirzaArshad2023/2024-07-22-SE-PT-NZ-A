const cities = ["Auckland", "Wellington", "Christchurch"]

const queueOfOrders = ["Order20", "Order11", "Order300", "Order415","Order333"]
queueOfOrders.push() //Queue (FIFO)
queueOfOrders.shift()


//Stack (LIFO)            0       1       2
const stackOfOrders = ["Item1","Item2","Item3"]
stackOfOrders.push()
//stackOfOrders.pop() //Stack
console.log(stackOfOrders[0])
console.log(stackOfOrders[1])
console.log(stackOfOrders[2])
console.log(stackOfOrders.length)

const Students = new Array()

Students.push("John")
Students.push("Bill")

console.log(Students)
Students.pop()

console.log(Students)
//cities.shift()
cities.pop()
console.log(cities)