// define our own join() function for objects
const obj = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};

const obj2 = {
    0: "Mirza",
    1: "Baig",
    2: "IOD",
    length: 3
}

//obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()

Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects

console.log(obj.join(",")); // Hello,world
console.log(obj2.join(","));