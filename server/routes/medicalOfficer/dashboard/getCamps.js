const express = require('express');
const router = express.Router();
const camps = require('../../../services/medicalOfficer/dashboard/getCamps');
// 100
router.post('/',  async function (req, res) {
  const medicalOfficerNic =  req.body.medicalOfficerNic ;
  let pastCamp;
  let ongoingCamp;
  let upcomingCamp;
  let pendingCamp;
  let allCamp;
  let clusterCamp;
  await camps.getCamps(medicalOfficerNic).then(
    (medicalOfficer) => {
      pastCamp = medicalOfficer[0]['pastCamp'];
      ongoingCamp = medicalOfficer[0]['ongoingCamp'];
      upcomingCamp =  medicalOfficer[0]['upcomingCamp'];
      pendingCamp =  medicalOfficer[0]['pendingCamp'];
    } 
 )
 await camps.getCampsCount(medicalOfficerNic).then(
  (medicalOfficer) => {
    allCamp = medicalOfficer[0]['allCamp'];
    clusterCamp = medicalOfficer[0]['clusterCenterCamp'];
 
  } 
)
  await camps.getCampsDetails(medicalOfficerNic).then(
    (camps) => {
       
      const camp = camps ;
      return res.json({
        camps: camp,
          pastCamp :  pastCamp,
          ongoingCamp : ongoingCamp,
          upcomingCamp : upcomingCamp,
          pendingCamp : pendingCamp,
          allCamp :   allCamp,
          clusterCamp : clusterCamp,
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;