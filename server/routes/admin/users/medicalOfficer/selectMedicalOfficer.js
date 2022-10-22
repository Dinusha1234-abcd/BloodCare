const express = require('express');
const router = express.Router();
const selectMedicalOfficer = require('../../../../services/admin/users/medicalOfficer/selectMedicalOfficer');

router.post('/',  async function (req, res) {
    const admin =  req.body.adminNic ;

    await selectMedicalOfficer.getMedicalOfficerDetails().then(
        (user) => {
            const medicalOfficer = user;
            return res.json({
                medicalOfficers : medicalOfficer
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;