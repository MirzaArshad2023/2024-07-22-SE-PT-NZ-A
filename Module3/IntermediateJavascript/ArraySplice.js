const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 4, "Go")
console.log(removed) // [ 'I', 'study', 'JavaScript' ]
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]