const express = require('express'); 
const router = express.Router();
const removeNurse = require('../../../../services/clusterAdmin/medicalStaff/nurse/removeNurse');

router.post('/', async function (req, res) {

    const nurseNic = req.body.nurseNic;
   
    await removeNurse.removeNurse(nurseNic).then(
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