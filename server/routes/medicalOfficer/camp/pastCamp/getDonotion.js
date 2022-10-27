const express = require('express');
const router = express.Router();
const getDonation = require('../../../../services/medicalOfficer/camp/pastCamp/getDonotion');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await getDonation.getDonor(campnumber).then(
    (users) => {
       
      const user = users ;
      return res.json({
        users: user
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;