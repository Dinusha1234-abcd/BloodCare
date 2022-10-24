const express = require('express');
const router = express.Router();
const medicalStaff = require('../../../../services/clusterAdmin/camp/pendingCamp/getStaffMembers');

router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
  const date =  req.body.date; 
  const campNumber = req.body.campNumber;
  let centerNumber;
  await medicalStaff.getBloodCenterNumber(clusterAdminNic).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await medicalStaff.getMedicalStaff(centerNumber,date,campNumber).then(
    (medicalStaff) => {
       
      const data = medicalStaff ;
      return res.json({
        medicalStaff: data
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;