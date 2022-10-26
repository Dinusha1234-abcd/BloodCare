const express = require('express');
const router = express.Router();
const removeClusterCenter = require('../../../services/admin/clusterCenter/removeClusterCenter');

router.post('/', async function (req, res) {

    const clusterCenterNic = req.body.clusterCenterNic;
   
    await removeClusterCenter.removeClusterCenter(clusterCenterNic).then(
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