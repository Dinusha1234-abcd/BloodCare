const express = require('express');
const router = express.Router();
const homeSelectCamp = require('../../services/registerDonor/homeSelectCamp');


router.post('/',async function(req, res) {
    const regDonor = req.body.regDonorNic ;
    let province;
    console.log(regDonor);
    var todayDate = new Date().toISOString().slice(0,10);
    await homeSelectCamp.getdonorProvince(regDonor).then(
        (regDonor)=>{
            province = regDonor[0].province;
        }
    )
    await homeSelectCamp.getCamp(province, todayDate).then(
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