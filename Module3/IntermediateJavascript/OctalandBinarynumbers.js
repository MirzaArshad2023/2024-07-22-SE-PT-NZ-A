const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255

console.log(binary)
console.log(octal)

const decimal1 = 255.34234234234

const result = decimal1.toString(16) //hex base 16
console.log(result)

console.log(decimal1.toString(8)) //octal number equivalent

console.log(decimal1.toString(2))