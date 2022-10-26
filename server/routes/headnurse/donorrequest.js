const express = require('express');
const router = express.Router();
const donorrequest = require('../../services/headnurse/donorrequest');


router.get('/',async function(req, res) {
    await donorrequest.getDonorRequest().then(
        (requests) =>{
            const donorrequest = requests;
            return res.json({
                donorrequest : donorrequest
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;