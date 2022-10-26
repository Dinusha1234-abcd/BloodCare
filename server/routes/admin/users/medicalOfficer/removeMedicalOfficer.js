const express = require('express');
const router = express.Router();
const removeMedicalOfficer = require('../../../../services/admin/users/medicalOfficer/removeMedicalOfficer');

router.post('/', async function (req, res) {

    const medicalOfficerNic = req.body.medicalOfficerNic;
   
    await removeMedicalOfficer.removeMedicalOfficer(medicalOfficerNic).then(
         () => {

            return res.json({
                message: "success",
            });

        }
    ).catch((err) => {
      
        return res.json({ message: "unsucess" });
    });


});

module.exports = router;