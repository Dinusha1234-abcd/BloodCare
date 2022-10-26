const express = require('express');
const router = express.Router();
const camps = require('../../../services/clusterAdmin/dashboard/getCamps');

router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
 
  await camps.getCamps(clusterAdminNic).then(
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