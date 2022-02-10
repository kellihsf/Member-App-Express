const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../members')

// This route gets all members
router.get('/', (req, res) =>{
    res.json(members);
})

// This route gets a single Member
router.get('/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})


//Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and an email'})
    }

    members.push(newMember);
    res.json(members)
})

//Update Member


module.exports = router;