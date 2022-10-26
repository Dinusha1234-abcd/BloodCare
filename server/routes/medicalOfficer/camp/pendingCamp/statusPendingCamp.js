const express = require('express');
const router = express.Router();
const statusPendingCamp = require('../../../../services/medicalOfficer/camp/pendingCamp/statusPendingCamp');


router.post('/', async function (req, res) {
   const status = req.body.status;
   const campNumber = req.body.campNumber;
 
 await statusPendingCamp.updateStatus(status,campNumber).then(
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