const express = require('express');
const router = express.Router();

//Login / Landing page
//@request Get
router.get('/', (req,res) => {
    res.send('Login')
})

//Home page
//@request: Get
router.get('/home', (req,res) => {
    res.send('Home')
})

module.exports = router