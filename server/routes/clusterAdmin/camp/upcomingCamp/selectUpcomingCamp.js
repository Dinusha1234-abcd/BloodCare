const express = require('express');
const router = express.Router();
const selectUpcomingCamp = require('../../../../services/clusterAdmin/camp/upcomingCamp/selectUpcomingCamp');

router.post('/',  async function (req, res) {
  const clusterAdmin =  req.body.clusterAdminNic ;
  let centerNumber;
  await selectUpcomingCamp.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await selectUpcomingCamp.getUpcomingCamps(centerNumber).then(
    (camp) => {
       
      const camps = camp ;
      return res.json({
        camps: camps
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;