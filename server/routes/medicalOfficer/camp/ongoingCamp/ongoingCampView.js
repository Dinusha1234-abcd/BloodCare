const express = require('express');
const router = express.Router();
const ongoingCampView = require('../../../../services/clusterAdmin/camp/ongoingCamp/ongoingCampView');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await ongoingCampView.getOngoingCamp(campnumber).then(
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