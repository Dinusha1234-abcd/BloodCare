const express = require('express');
const router = express.Router();
const selectMedicalOfficer = require('../../../../services/admin/users/medicalOfficer/selectMedicalOfficer');

router.post('/',  async function (req, res) {
    // const admin =  req.body.adminNic ;

    await selectMedicalOfficer.getMedicalOfficerData().then(
        (user) => {
            const medicalOfficers = user;
            return res.json({
                medicalOfficers : medicalOfficers
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;