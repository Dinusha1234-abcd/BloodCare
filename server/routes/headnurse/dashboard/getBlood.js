const express = require('express');
const router = express.Router();
const blood = require('../../../services/headnurse/dashboard/getBlood');
// 100
router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
    
  await blood.getBloodDetails(clusterAdminNic).then(
    (bloods) => {
       
      const blood = bloods ;
      return res.json({
        bloods: blood, 
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;