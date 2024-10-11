//This library contains the logic to add and multiple numbers
class CalculatorLibrary
{
    
    constructor()
    {
        this.id = Math.floor(Math.random()*1000)
    }
    #log = (value) => {
        console.log(`[Calculator :${this.id}]:${value}`)
        }
    add(num1, num2)
    {
        this.#log(num1 + num2)
        return num1 + num2;
    }
    multiply(num1, num2)
    {
        this.#log(num1 * num2)
        return num1 * num2
    }
}

module.exports = CalculatorLibrary