const express = require('express');
const router = express.Router();
const summary = require('../../services/headnurse/summary');


router.get('/',async function(req, res) {
    await summary.getSummary().then(
        (report) =>{
            const summary = report;
            return res.json({
                summary : summary
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;