const router = require('express').Router();
const verify = require('./verify');

router.get('/', verify, async (req,res) => {
    res.json({posts: {title: "Post", description: "Description"}});
});

module.exports = router;