class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let cheetah = new Animal("cheetah")
let tiger = new Animal("tiger")
console.log(tiger.run(70))
console.log(cheetah.run(120))

class Rabbit extends Animal{

    Hide()
    {
        console.log(`${this.name} hides!`);
    }
}

let whitrabbit = new Rabbit("whiteRabbit")

whitrabbit.Hide()
whitrabbit.run(100)
whitrabbit.stop()

