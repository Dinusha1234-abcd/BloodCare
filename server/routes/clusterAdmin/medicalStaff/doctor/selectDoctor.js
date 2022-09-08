const express = require('express');
const router = express.Router();
const selectDoctor = require('../../../../services/clusterAdmin/medicalStaff/doctor/selectDoctor');


router.post('/',  async function (req, res) {
  
  const clusterAdmin =  req.body.clusterAdminNic ;
  let centerNumber;
  await selectDoctor.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await selectDoctor.getDoctors(centerNumber).then(
    (user) => {
       
      const doctors = user ;
      return res.json({
        doctors: doctors
      })
    }).catch((err) => {
        console.log(err);
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;