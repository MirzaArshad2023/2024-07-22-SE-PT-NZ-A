const express = require("express");
const router = express.Router();

const users = [
    {id: 1, name: 'Anthony Albanese', country: 'AU'},
    {id: 2, name: 'Joe Biden', country: 'US'},
    {id: 3, name: 'Chris Hipkins', country: 'NZ'},
    {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
]
router.get("/headers",(req, res)=>{

    res.json(req.headers)

})

router.get('/:id', (req, res)=>{

    let userID = req.params.id

    let userFound = users.find(user => user.id == userID)

    userFound? res.status(200).json({result: userFound}) : res.status(404).json({result:
        `User ${userID} not found`})
})

router.post("/", (req, res)=>{

    let newUser = req.body

    if(!newUser.name || !newUser.location)
    {
        res.status(500).json({error: 'User must contain a name and location'})
        return
    }
    else if (!newUser.id) { // if no ID, generate one
        newUser.id = users.length + 1;
        }

    users.push(newUser)
    res.status(200).json(newUser)
})

module.exports = router