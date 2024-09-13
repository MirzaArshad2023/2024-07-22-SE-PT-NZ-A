class Car
{
    constructor(model, year, color, type)
    {
        this.model = model
        this.year = year
        this.color = color
        this.type = type
        this.wheels = 4
    }
    drive()
    {
        console.log(`${this.model} drives`)
    }
    accelerate()
    {
        console.log(`${this.model} accelerates`)
    }
    stop()
    {
        console.log(`${this.model} stops`)
    }
}

let toyota = new Car("toyota camry", 1999, "white", "sedan")
let ferrari = new Car("Ferrari", 2020, "Red", "Sports car")

class UTECar extends Car
{
    constructor(model, year, color, type, mode)
    {
        super(model, year, color, type)
        this.mode = mode
    }
    Enable4x4()
    {
        console.log("4x4 is enabled")
    }
    Enable4x2()
    {
        console.log("4x2 is enabled")
    }
    drive()
    {
        this.Enable4x2()
        super.drive()
    }
}

let ford150 = new UTECar("Ford150", 2010, "White", "SUV", "Sports")
let landcruiser = new UTECar("Landcruiser", 2005, "Silver", "OFF ROAD")
landcruiser.drive()
landcruiser.stop()
landcruiser.Enable4x2()
landcruiser.Enable4x4()