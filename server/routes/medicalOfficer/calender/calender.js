const express = require('express');
const router = express.Router();
const calender = require('../../../services/medicalOfficer/calender/calender');

router.post('/',  async function (req, res) {
  const medicalOfficerNic =  req.body.medicalOfficerNic ;
 
  await calender.getCamp(medicalOfficerNic).then(
    (camps) => {
       
      const camp = camps ;
      return res.json({
        camps: camp
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;