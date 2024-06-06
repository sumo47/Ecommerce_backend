const express = require('express')
const router = express.Router();

const userModel = require('../models/userModel.js')

router.get('/getUsers', async (req, res) => {
    let data = await userModel.getUsers()
    console.log(data)
    res.send({ data: data, status: true })
})

router.post('/createUser', async (req, res) => {
    let data = await userModel.createUser()
    console.log(data)
    res.send({ data: data, status: true })
})

module.exports = router