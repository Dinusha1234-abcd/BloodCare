const express = require('express');
const router = express.Router();
const campRegister = require('../services/campRegister');

router.post('/', async function (req, res) {
   const FullName = req.body.FullName;
   const NIC = req.body.NIC;
   const email = req.body.email;
   const campName = req.body.campName;
   const campDate = req.body.campDate;
   const location = req.body.location;
   const district = req.body.district;
   const mobileNumber = req.body.mobileNumber;
   const clusterCenter = req.body.clusterCenter;
   const numberofDonors = req.body.donors;
   
   await campRegister.addCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,numberofDonors).then(
      (user) => {
       
            return res.json({
               message: "success",
            });
            console.log("ok")
        
      }
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;