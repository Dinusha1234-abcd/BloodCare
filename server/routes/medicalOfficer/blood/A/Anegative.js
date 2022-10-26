const express = require('express');
const router = express.Router();
const Anegative = require('../../../../services/clusterAdmin/blood/A/Anegative');


router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;

 
  await Anegative.getAnegative(clusterAdminNic).then(
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