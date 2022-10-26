const express = require('express');
const router = express.Router();
const selectUpcomingCamp = require('../../../../services/clusterAdmin/camp/upcomingCamp/selectUpcomingCamp');

router.post('/',  async function (req, res) {
  const clusterAdmin =  req.body.clusterAdminNic ;
  let centerNumber;
  var todayDate = new Date().toISOString().slice(0, 10);
  await selectUpcomingCamp.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await selectUpcomingCamp.getUpcomingCamps(centerNumber,todayDate).then(
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