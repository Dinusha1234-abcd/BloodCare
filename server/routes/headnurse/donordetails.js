const express = require('express');
const router = express.Router();
const donordetails = require('../../services/headnurse/donordetails');


router.post('/',async function(req, res) {

    const donorNumber = req.body.donorNumber;

    await donordetails.getDonorDetails(donorNumber).then(
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