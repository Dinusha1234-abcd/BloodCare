const express = require('express');
const router = express.Router();
const pendingCampView = require('../../../../services/clusterAdmin/camp/pendingCamp/pendingCampView');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await pendingCampView.getPendingCamp(campnumber).then(
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