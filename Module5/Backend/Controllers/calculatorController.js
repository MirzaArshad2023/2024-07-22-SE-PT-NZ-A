const calculatorLibrary = require("../Libraries/CalculatorLibrary") //library to do calculator operations
let calc = new calculatorLibrary()

let addNumbers = (req, res)=>{
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)

    let result = calc.add(number1, number2) //using library to add
    //res.send("Result : " + result)
    res.status(200)
    res.json({res: result})

}

let multiplyNumbers = (req, res)=>{
   
        let number1 = parseInt(req.query.num1)
        let number2 = parseInt(req.query.num2)
    
        if(!number1 || !number2)
        {
            res.status(500).json({Error: `Invalid data`})
            return
        }
        let result = calc.multiply(number1, number2)
    
        res.status(200)
        res.json({res: result})
}

module.exports = {addNumbers, multiplyNumbers}