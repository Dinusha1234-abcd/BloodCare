const express = require('express');
const router = express.Router();
const registerdonor = require('../../../services/headnurse/registerdonor');

router.post('/', async function(req, res){
    
    const province = req.body.province;
    const district = req.body.district;
    const userNic = req.body.userNic;
  
 
    

    await registerdonor.insertDonor(province,district,userNic).then(
        (headnurse) => {
            return res.json({
                message: "success",
            });
        }
    ).catch((err) => {
        console.log(err);
        return res.json({message : "unsuccess"});
    });

});
module.exports = router;  