const express = require('express');
const router = express.Router();
const Apositive = require('../../../../services/clusterAdmin/blood/A/Apositive');

router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await Apositive.getApositive(clusterAdminNic).then(
    (bloods) => {
       
      const blood = bloods ;
      return res.json({
        bloods: blood
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;