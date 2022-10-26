const express = require('express');
const router = express.Router();
const OnegativeGetCamp = require('../../../../services/clusterAdmin/blood/O/OnegativeGetCamp');


router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await OnegativeGetCamp.getCamp(clusterAdminNic).then(
    (camps) => {
       
      const camp = camps ;
      return res.json({
        camps: camp
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;