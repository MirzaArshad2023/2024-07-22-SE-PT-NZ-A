const express = require("express")
const approuter = require("./routes/approutes")
const calculatorRouter = require("./routes/calculatorRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

const cors = require("cors")

//const server2 = express()

app.use(express.json())


//server2.use("/", express.static("public"))

app.use(cors())
app.use("/", approuter)
app.use("/Calculate", calculatorRouter)
app.use("/users", userRoutes)

module.exports = app