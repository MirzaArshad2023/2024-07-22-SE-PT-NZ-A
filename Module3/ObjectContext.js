const user = {
    name: 'Bilbo Baggins',
    age: 45,
    printGreeting() {
    console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
    console.log(`My age is ${this.age}`)

    }
    }
    // 'user' is before the dot, where 'this' comes from
    user.printGreeting(); // Hello, I'm Bilbo Baggins