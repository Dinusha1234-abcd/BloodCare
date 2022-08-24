const express = require('express');
const router = express.Router();
const selectDoctor = require('../../../../services/clusterAdmin/medicalStaff/doctor/selectDoctor');


router.post('/',  async function (req, res) {
  console.log("name")
  const clusterAdmin = 1;

  //  selectDoctor.getBloodCenterNumber(clusterAdmin).then(
  //   (clusterAdmin)=>{
  //        centerNumber = clusterAdmin[0].bloodCenterNo;
  //   }
  //   )
  await selectDoctor.getDoctors(clusterAdmin).then(
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