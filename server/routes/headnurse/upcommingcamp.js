const express = require('express');
const router = express.Router();
const upcommingcamp = require('../../services/headnurse/upcommingcamp');


router.get('/',async function(req, res2) {
    await upcommingcamp.getUpcommingCamp().then(
        (assigncamps) =>{
            const upcommingcamp = assigncamps;
            return res2.json({
                upcommingcamp : upcommingcamp
            })
        }).catch((err) => {
            console.log(err);
            return res2.json({message: "Unsucess"});
        });
});
module.exports = router;