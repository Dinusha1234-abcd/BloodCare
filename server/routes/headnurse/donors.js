const express = require('express');
const router = express.Router();
const donors = require('../../services/headnurse/donors');


router.get('/',async function(req, res) {
    await donors.getDonors().then(
        (user) =>{
            const donors =user;
            return res.json({
                donors :donors
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;