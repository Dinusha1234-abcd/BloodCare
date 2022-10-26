const express = require('express');
const router = express.Router();
const profileDetail = require('../../services/registerDonor/profileDetail');

router.post('/',async function(req, res) {
    const regDonor = req.body.regDonorNic;
    let donorId;
    await profileDetail.getDonor(regDonor).then(
        (regDonor)=>{
            donorId = regDonor[0].registerDonorId;
        }
    ).catch((err)=>{
        console.log(err);
    } );

    await profileDetail.getDonorProfile(donorId).then(
        (user) =>{
            const profile =user;
            return res.json({
                profile : profile
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;