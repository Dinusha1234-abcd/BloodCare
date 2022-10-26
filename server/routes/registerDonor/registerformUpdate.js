const express = require('express');
const router = express.Router();
const registerformUpdate = require('../../services/registerDonor/registerformUpdate');

router.post('/',async function(req, res){
    const campId=req.body.id;
    const regDonorNic=req.body.userNic;
    const foodType = req.body.value;
    console.log(campId);
    await registerformUpdate.insertfoodType(campId,regDonorNic,foodType).then(
        () =>{  return res.json(
            {
              message: "sucess"  
            })
        }
           
    ).catch((err) =>{
        console.log(err);
    })

});
module.exports = router;