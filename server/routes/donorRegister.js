const express = require('express');
const router = express.Router();
const campRegister = require('../services/donorRegister');

router.post('/registerCamp', async function (req, res) {
   const FirstName = req.body.FirstName;
   const LastName = req.body.LastName;
   const NIC = req.body.NIC;
   const Address = req.body.Adrress;
   const Email = req.body.Email;
   const MobileNumber = req.body.MobileNumber;
   
   await donorRegister.joinCamp(FirstName, LastName, NIC, Address, Email, MobileNumber).then(
      (user) => {
       
            return res.json({
               message: "success",
            });
        
      }
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;