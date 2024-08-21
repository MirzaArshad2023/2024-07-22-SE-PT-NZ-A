function Doubles(x, y, z, a, b, c, d) //Function declaratoin
{
   // console.log(arguments[0] + " , " + arguments[1] + " , " + arguments[2])
    return x * x
}

Doubles(20, 30)
const x = function(z) //function expressions
{
    console.log(arguments[0])
    return z * z
}
x(20)
//console.log(x(4))
//console.log(x(8))
//console.log(x(16))


/*const y = (z) => {
    
    return z * z
}*/

const y = (z) => z * z //Arrow functions

const sayHI = (name) => console.log("Hello " + name)
console.log(y(3))
console.log(y(6))
sayHI("Mirza")