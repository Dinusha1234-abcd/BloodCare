const express = require('express');
const router = express.Router();
const historyRecordsSelect = require('../../services/registerDonor/historyRecordsSelect');


router.get('/',async function(req, res) {
    await historyRecordsSelect.getHistoryRecords().then(
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