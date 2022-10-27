const express = require('express');
const router = express.Router();
const donorCalender = require('../../services/registerDonor/donorCalender');

router.post('/',  async function (req, res) {
    const registerDonorNic =  req.body.registerDonorNic ;
    console.log(registerDonorNic);
    await donorCalender.getregDonorCamp(registerDonorNic).then(
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