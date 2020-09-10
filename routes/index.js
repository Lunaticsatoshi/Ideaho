const express = require('express');
const router = express.Router();

//Login / Landing page
//@request Get
router.get('/', (req,res) => {
    res.render('login', {
        layout: 'login'
    })
})

//Home page
//@request: Get
router.get('/home', (req,res) => {
    res.render('home')
})

module.exports = router