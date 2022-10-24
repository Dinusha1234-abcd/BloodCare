const express = require('express');
const router = express.Router();
const homeSelectCamp = require('../../services/headnurse/upcommingcamp');


router.get('/',async function(req, res) {
    await upcommingcamp.getUpcommingCamp().then(
        (headnurse) =>{
            const futurecamp =headnurse;
            return res.json({
                futurecamp :futurecamp
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;