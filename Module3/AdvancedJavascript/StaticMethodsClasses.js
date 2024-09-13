class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}

let jonas = new Person('Jonas')

console.log(jonas.getName())
console.log(jonas.name)
console.log(Person.latin)
console.log(Person.createAnonymous())
//console.log(jonas.createAnonymous())