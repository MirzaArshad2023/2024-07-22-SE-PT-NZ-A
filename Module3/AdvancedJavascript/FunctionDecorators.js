function Sum(a, b)
{
    return a + b;
}
function Multiply(a, b, c)
{
    return a * b * c;
}
function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}
printGreeting("Undecorated");

function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function () {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction.apply(this, arguments) // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way

const decoratedSumFunction = loggingTimingDecorator(Sum)

console.log(decoratedSumFunction(2,4))

const decoratedMultiply = loggingTimingDecorator(Multiply)
console.log(decoratedMultiply(4, 5, 6))