const express = require('express'); 
const router = express.Router();
const removeHeadNurse = require('../../../../services/clusterAdmin/medicalStaff/headNurse/removeheadNurse');

router.post('/', async function (req, res) {

    const headNurseNic = req.body.headNurseNic;
   
    await removeHeadNurse.removeHeadNurse(headNurseNic).then(
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