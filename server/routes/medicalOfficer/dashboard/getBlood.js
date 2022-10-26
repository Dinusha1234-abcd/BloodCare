const express = require('express');
const router = express.Router();
const blood = require('../../../services/medicalOfficer/dashboard/getBlood');
// 100
router.post('/',  async function (req, res) {
  const medicalOfficerNic =  req.body.medicalOfficerNic ;
    
  await blood.getBloodDetails(medicalOfficerNic).then(
    (bloods) => {
       
      const blood = bloods ;
      return res.json({
        bloods: blood, 
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;