const express = require('express');
const router = express.Router();
const showCamps = require('../services/showCamps');


router.get('/',async function(req, res) {
    await showCamps.getCampsData().then(
        (user) =>{
            const camps =user;
            return res.json({
                camps :camps
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});

module.exports = router;