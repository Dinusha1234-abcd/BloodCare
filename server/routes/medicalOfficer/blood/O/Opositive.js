const express = require('express');
const router = express.Router();
const Opositive = require('../../../../services/clusterAdmin/blood/O/Opositive');

router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await Opositive.getOpositive(clusterAdminNic).then(
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