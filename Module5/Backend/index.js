const app = require("./app")


const port = 3000

//const port2 = 3001



app.listen(port, ()=>console.log("Server started now and listening on port " + port))

//server2.listen(port2, ()=> console.log("Second server is listening on port" + port2), port2)