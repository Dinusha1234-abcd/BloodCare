const express = require('express');
const router = express.Router();
const ABnegativeGetCamp = require('../../../../services/clusterAdmin/blood/AB/ABnegativeGetCamp');


router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await ABnegativeGetCamp.getCamp(clusterAdminNic).then(
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