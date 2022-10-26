const express = require('express');
const router = express.Router();
const removeDoctorAdmin = require('../../../../services/admin/users/doctor/removeDoctor');

router.post('/', async function (req, res) {

    const doctorNic = req.body.doctorNic;
   
    await removeDoctorAdmin.removeDoctorAdmin(doctorNic).then(
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