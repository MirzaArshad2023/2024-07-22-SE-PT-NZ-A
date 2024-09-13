const texts = ["first", "last", "mid", "second"]
const numbers = [4,8,1,5,66,23,41]

const numbersTobeSorted = [...numbers]
console.log(texts.sort())
console.log(numbersTobeSorted.sort((num1, num2)=> num2 - num1))
console.log(numbers)