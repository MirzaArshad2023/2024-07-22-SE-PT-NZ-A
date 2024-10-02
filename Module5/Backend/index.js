const express = require("express")
const approuter = require("./routes/approutes")
const app = express()

const server2 = express()

const port = 3000

const port2 = 3001



server2.use("/", express.static("public"))

app.use("/", approuter)
app.listen(port, ()=>console.log("Server started now and listening on port " + port))

server2.listen(port2, ()=> console.log("Second server is listening on port" + port2), port2)