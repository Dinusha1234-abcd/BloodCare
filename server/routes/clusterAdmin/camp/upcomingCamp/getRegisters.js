const express = require('express');
const router = express.Router();
const getRegiters = require('../../../../services/clusterAdmin/camp/upcomingCamp/getRegisters');

router.post('/',  async function (req, res) {
  const campnumber =  req.body.campNumber ;
 
  await getRegiters.getRegiters(campnumber).then(
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