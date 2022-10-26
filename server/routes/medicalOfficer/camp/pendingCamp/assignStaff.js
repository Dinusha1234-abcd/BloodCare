const express = require('express');
const router = express.Router();
const assignStaff = require('../../../../services/medicalOfficer/camp/pendingCamp/assignStaff');


router.post('/', async function (req, res) {
   const type = req.body.type;
   const campNumber = req.body.campNumber;
   const staffId = req.body.staffId;
   const bloodCenterNumber = req.body.bloodCenterNumber;
 console.log(bloodCenterNumber)
 await assignStaff.assignStaff(type,campNumber,staffId,bloodCenterNumber).then(
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