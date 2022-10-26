const express = require('express');
const router = express.Router();
const medicalStaff = require('../../../services/clusterAdmin/dashboard/getMedicalStaff');

router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await medicalStaff.getMedicalStaff(clusterAdminNic).then(
    (users) => {
       
      const user = users ;
      return res.json({
        users: user
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;