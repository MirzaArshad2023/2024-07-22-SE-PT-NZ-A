function sayHiDefn(x, y) {
  console.log("Hi (function definition)");
}

const sayHiExpn = function (a) {
  console.log("Hi (function expression)");
};

const sayHiArrow = (a, b, c) => console.log("Hi (arrow function)");

//console.log(sayHiDefn.length);
//console.log(sayHiExpn.length);
//console.log(sayHiArrow.length)

function sum(x, y)
{
    
    console.log(x + y)
    sum.counter++
    console.log(`function called: ${sum.counter} times`)
}
sum.counter = 0
sum(2, 3)
sum(4, 5)
sum(12, 3)