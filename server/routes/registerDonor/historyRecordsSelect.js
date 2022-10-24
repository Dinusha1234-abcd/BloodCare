const express = require('express');
const router = express.Router();
const historyRecordsSelect = require('../../services/registerDonor/historyRecordsSelect');


router.post('/',async function(req, res) {
    const regDonor = req.body.regDonorNic;
    let donorId;
    await historyRecordsSelect.getDonor(regDonor).then(
        (regDonor)=>{
            donorId = regDonor[0].registerDonorId;
        }
    ).catch((err)=>{
        console.log(err);
    } );
    
    await historyRecordsSelect.getHistoryRecords(donorId).then(
        (user) =>{
            const records =user;
            return res.json({
                records : records
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;