const express = require('express');
const router = express.Router();
const donors = require('../../services/showCamps');


router.post('/',async function(req, res) {
    await camps.getCamps().then(
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