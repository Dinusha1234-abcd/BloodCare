const express = require('express');
const router = express.Router();
const pastCampView = require('../../../../services/clusterAdmin/camp/pastCamp/pastCampView');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await pastCampView.getPastCamp(campnumber).then(
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