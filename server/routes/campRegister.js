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
   const clusterCenter = req.body.clusterCenter;
 
   
   await campRegister.addCamp(FullName,NIC,email,mobileNumber,campName,campDate, location, district, clusterCenter,numberofDonors).then(
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