const express = require('express');
const router = express.Router();
const upcomingCampView = require('../../../../services/medicalOfficer/camp/upcomingCamp/upcomingCampView');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await upcomingCampView.getUpcomingCamp(campnumber).then(
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