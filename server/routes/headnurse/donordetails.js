const express = require('express');
const router = express.Router();
const donordetails = require('../../services/headnurse/donordetails');


router.get('/',async function(req, res) {
    await donordetails.getDonorDetails().then(
        (details) =>{
            const donordetails =details;
            return res.json({
                donordetails :donordetails
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;