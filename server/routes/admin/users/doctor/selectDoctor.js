const express = require('express');
const router = express.Router();
const selectDoctorAdmin = require('../../../../services/admin/users/doctor/selectDoctor');

router.post('/',  async function (req, res) {

    await selectDoctorAdmin.getDoctorData().then(
        (user) => {
            const doctors = user;
            return res.json({
                doctors : doctors
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;