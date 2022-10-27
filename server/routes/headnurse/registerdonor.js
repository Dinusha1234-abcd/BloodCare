const express = require('express');
const router = express.Router();
const registerdonor = require('../../services/headnurse/registerdonor');

router.post('/', async function(req, res){
    
    const province = req.body.province;
    const district = req.body.district;
<<<<<<< Updated upstream
    const userNic = req.body.userNic;
  
=======
    const nic = req.body.userNic;
    console.log(userNic);
>>>>>>> Stashed changes
 
    

    await registerdonor.insertDonor(province,district,userNic).then(
        () => {
            return res.json({
                message: "success",
            });
        }
    ).catch((err) => {
        console.log(err);
        return res.json({message : "unsuccess"});
    });

});
<<<<<<< Updated upstream
module.exports = router;  
=======
module.exports = router; 

*/
>>>>>>> Stashed changes
