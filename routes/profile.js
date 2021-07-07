const router = require('express').Router();
const User = require('../models/User');
const verify = require('./verify');

router.get('/', verify, async (req,res) => {
    const currentUserId = req.user.id;
    try{
        User.findOne({_id: currentUserId}).populate().exec((err,user) => {
            if(err) throw err;
            res.send("Name: " + user.name + "\n" + "Email: " + user.email);
        });
    } catch(err){
        res.status(400).send("Unable to find user");
    }
});

module.exports = router;