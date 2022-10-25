const express = require('express');
const router = express.Router();
const selectPendingCamp = require('../../../../services/medicalOfficer/camp/pendingCamp/selectPendingCamp');

router.post('/',  async function (req, res) {
  const medicalOfficer =  req.body.medicalOfficerNic ;
  let centerNumber;
  await selectPendingCamp.getBloodCenterNumber(medicalOfficer).then(
    (medicalOfficer)=>{
           centerNumber = medicalOfficer[0].bloodCenterNo;
     }
    ) 
  await selectPendingCamp.getPendingCamps(centerNumber).then(
    (camp) => {
       
      const camps = camp ;
      return res.json({
        camps: camps
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;