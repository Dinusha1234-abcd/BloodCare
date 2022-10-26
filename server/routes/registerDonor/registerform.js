const express = require('express');
const router = express.Router();
const registerform = require('../../services/registerDonor/registerform');

router.post('/', async function(req,res){
    const campId =req.body.Id ;
    const regDonor=req.body.userNic;
    // let camp;
    let campNumber;
    let campName;
    console.log(campName);
    await registerform.getCampId(campId).then(
        (campId)=>{
            campNumber = campId[0].bloodCampNumber;
            campName = campId[0].name;
        }
    ).catch((err)=>{
        console.log(err);
    } );
  
    await registerform.getRegisterformDetails(regDonor).then(
        (user) => {
            const camps = user;
      return res.json({
        camps: camps,
        campNumber : campNumber,
        campName : campName
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      }); 
});
module.exports = router;