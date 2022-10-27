const express = require('express');
const router = express.Router();
const selectUpcomingCamp = require('../../../../services/medicalOfficer/camp/upcomingCamp/selectUpcomingCamp');

router.post('/',  async function (req, res) {
  const medicalOfficer =  req.body.medicalOfficerNic ;
  let centerNumber;
  var todayDate = new Date().toISOString().slice(0, 10);
  await selectUpcomingCamp.getBloodCenterNumber(medicalOfficer).then(
    (medicalOfficer)=>{
           centerNumber = medicalOfficer[0].bloodCenterNo;
     }
    ) 
  await selectUpcomingCamp.getUpcomingCamps(centerNumber,todayDate).then(
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