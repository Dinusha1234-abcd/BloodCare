const express = require('express');
const router = express.Router();
const historyRecordsSelect = require('../../services/registerDonor/historyRecordsSelect');


router.post('/',async function(req, res) {
    const regDonor = req.body.regDonorNic;
    await historyRecordsSelect.getHistoryRecords(regDonor).then(
        (regDonor) =>{
            const records =regDonor;
            return res.json({
                records : records
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;