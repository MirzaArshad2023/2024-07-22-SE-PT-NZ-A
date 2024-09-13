let x = 10
let y = 20

console.log(x)
console.log(y)
console.log("First")
let timeoutid = setTimeout(()=> console.log("second"), 5000)
console.log("Third")
//clearTimeout(timeoutid)

