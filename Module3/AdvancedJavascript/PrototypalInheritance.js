let animal = {
  eats: true,
  sleeps: true,
  legs: 4,
  mammal: true,
}; // inherits from Object prototype

let rabbit1 = {
  jumps: true,
};

Object.setPrototypeOf(rabbit1, animal); //rabbits now inheritance from animal

let wolf = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  howls: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps not in for...in
  },
});

for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in wolf) console.log(`${prop} is ${wolf[prop]}`); // own properties, then inherited ones

function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)

let rabbit2 = new Rabbit("whiterabbit")
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

