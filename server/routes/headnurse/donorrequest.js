const express = require('express');
const router = express.Router();
const donorrequest = require('../../services/headnurse/donorrequest');


router.post('/',async function(req, res) {
      
    const campNumber = req.body.campNumber;

    await donorrequest.getDonorRequest(campNumber).then(
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