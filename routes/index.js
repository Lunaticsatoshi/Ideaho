const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest } = require('../middleware/auth');

//Login / Landing page
//@request Get
router.get('/',ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login'
    })
})

//Home page
//@request: Get
router.get('/home', ensureAuth, (req,res) => {
    res.render('home')
})

module.exports = router