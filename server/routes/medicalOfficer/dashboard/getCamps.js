const express = require('express');
const router = express.Router();
const camps = require('../../../services/clusterAdmin/dashboard/getCamps');
// 100
router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;
  let pastCamp;
  let ongoingCamp;
  let upcomingCamp;
  let pendingCamp;
  let allCamp;
  let clusterCamp;
  await camps.getCamps(clusterAdminNic).then(
    (clusterAdmin) => {
      pastCamp = clusterAdmin[0]['pastCamp'];
      ongoingCamp = clusterAdmin[0]['ongoingCamp'];
      upcomingCamp =  clusterAdmin[0]['upcomingCamp'];
      pendingCamp =  clusterAdmin[0]['pendingCamp'];
    } 
 )
 await camps.getCampsCount(clusterAdminNic).then(
  (clusterAdmin) => {
    allCamp = clusterAdmin[0]['allCamp'];
    clusterCamp = clusterAdmin[0]['clusterCenterCamp'];
 
  } 
)
  await camps.getCampsDetails(clusterAdminNic).then(
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