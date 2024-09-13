const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

const students = ['John', "Bill", "Smith", "Tom"]

hobbits.forEach((item, index)=> {
  
    console.log(item + " is stored at index " + index)

})


let newArray = []
students.forEach((item, index) => {
 
    newArray.push(item.toUpperCase())
})

console.log(newArray)

const animals = ["elephant", "Rabbit", "Monkey", "Mirza"]


console.log(animals[animals.indexOf("Mirza")] + " is found")

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks.indexOf('B-')
let bIndexLast = marks.lastIndexOf('B-')
console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6