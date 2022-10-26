const express = require('express');
const router = express.Router();
const removeClusterAdmin = require('../../../../services/admin/users/clusterAdmin/removeClusterAdmin');

router.post('/', async function (req, res) {

    const clusterAdminNic = req.body.clusterAdminNic;
   
    await removeClusterAdmin.removeClusterAdmin(clusterAdminNic).then(
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