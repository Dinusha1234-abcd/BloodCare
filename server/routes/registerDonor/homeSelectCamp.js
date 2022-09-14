const express = require('express');
const router = express.Router();
const homeSelectCamp = require('../../services/registerDonor/homeSelectCamp');


router.get('/',async function(req, res) {
    await homeSelectCamp.getCamp().then(
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