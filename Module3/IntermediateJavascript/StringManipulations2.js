const sentence = 'The quick brown fox jumps over the lazy dog.';

const sentence2 = "Joe,Bill,Will,Smith,Tom"
const sentence3 = "name:Mirza;name:Will;name:Smith;name:Bruce"
console.log(sentence.split(' '))
console.log(sentence2.split(','))
console.log(sentence3.split(';'))

console.log(sentence.slice(4, 10))
console.log(sentence.slice(15, 19))
let modifiedText = sentence.replace('quick', 'slow')
modifiedText = modifiedText.replace('brown', 'black')
console.log(modifiedText)
console.log(sentence)

const someText = "   Mirza Arshad   "
console.log(someText.trim())