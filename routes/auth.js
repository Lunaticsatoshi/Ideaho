const express = require('express');
const passport = require('passport');

const router = express.Router();

//Login   Auth With Google
//@request Get /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//Auth Google Auth Callback
//@request: Get /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/home')
    }
);

//Logout User
//@request: Get /auth/logout
router.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router