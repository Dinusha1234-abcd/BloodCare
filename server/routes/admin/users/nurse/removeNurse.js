const express = require('express');
const router = express.Router();
const removeNurseAdmin = require('../../../../services/admin/users/nurse/removeNurse');

router.post('/', async function (req, res) {

    const nurseNic = req.body.nurseNic;
   
    await removeNurseAdmin.removeNurseAdmin(nurseNic).then(
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