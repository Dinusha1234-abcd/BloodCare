const express = require('express');
const router = express.Router();
const removeHeadNurseAdmin = require('../../../../services/admin/users/headNurse/removeHeadNurse');

router.post('/', async function (req, res) {

    const headNurseNic = req.body.headNurseNic;
   
    await removeHeadNurseAdmin.removeHeadNurseAdmin(headNurseNic).then(
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