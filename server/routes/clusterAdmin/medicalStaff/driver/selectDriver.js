const express = require('express');
const router = express.Router();
const selectDriver = require('../../../../services/clusterAdmin/medicalStaff/doctor/selectDoctor');


router.post('/',  async function (req, res) {
  console.log("name")
  const clusterAdmin = req.body.clusterAdminNic;

  
  await selectDriver.getDriver(clusterAdmin).then(
    (user) => {
       
      const driver = user ;
      return res.json({
        drivers: driver
      })
    }).catch((err) => {
        console.log(err);
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;