const express = require('express');
const router = express.Router();
const removeDriver = require('../../../../services/clusterAdmin/medicalStaff/driver/removeDriver');

router.post('/', async function (req, res) {

    const driverNic = req.body.driverNic;
   
    await removeDriver.removeDriver(driverNic).then(
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