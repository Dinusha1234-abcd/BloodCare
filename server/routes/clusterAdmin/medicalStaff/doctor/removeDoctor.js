const express = require('express');
const router = express.Router();
const removeDoctor = require('../../../../services/clusterAdmin/medicalStaff/doctor/removeDoctor');

router.post('/', async function (req, res) {

    const doctorNic = req.body.doctorNic;
   
    await removeDoctor.removeDoctor(doctorNic).then(
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