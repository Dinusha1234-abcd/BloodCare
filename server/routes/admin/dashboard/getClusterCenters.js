const express = require('express');
const router = express.Router();
const clusterCenters = require('../../../services/admin/dashboard/getClusterCenters');

router.post('/',  async function (req, res) {
 
  await clusterCenters.getClusterCenters().then(
    (clusters) => {
       
      const cluster = clusters ;
      return res.json({
        clusters: cluster
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;