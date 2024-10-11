const express = require("express")
const calculatorRouter = express.Router()
const calculatorController = require("../Controllers/calculatorController")

calculatorRouter.get("/Add", (req, res)=>{
    calculatorController.addNumbers(req, res)
})

calculatorRouter.get("/Multiply", (req, res)=>{

    calculatorController.multiplyNumbers(req, res)

})

module.exports = calculatorRouter