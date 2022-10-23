const express = require('express');
const router = express.Router();
const selectClusterCenter = require('../../../services/admin/clusterCenter/selectClusterCenter');

router.get('/',async function (req, res){

    await selectClusterCenter.getClusterCenterData().then(
        (clusterCenter) => {
            const clusterCenters = clusterCenter;
            return res.json({
                clusterCenters : clusterCenters
            })

        }
    ).catch((err) => {
        console.log(err);
        return res.json({ message: "unsucess" });
    });

});
module.exports = router;