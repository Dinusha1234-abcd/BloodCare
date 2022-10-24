const express = require('express');
const router = express.Router();
const upcommingcamp = require('../../services/headnurse/upcommingcamp');


router.get('/',async function(req, res) {
    await upcommingcamp.getUpcommingCamp().then(
        (assigncamps) =>{
            const upcommingcamp = assigncamps;
            return res.json({
                upcommingcamp : upcommingcamp
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;