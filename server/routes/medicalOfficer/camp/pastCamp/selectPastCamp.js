const express = require('express');
const router = express.Router();
const selectPastCamp = require('../../../../services/clusterAdmin/camp/pastCamp/selectPastCamp');

router.post('/',  async function (req, res) {
  const clusterAdmin =  req.body.clusterAdminNic ;
  let centerNumber;
  var todayDate = new Date().toISOString().slice(0, 10);
  await selectPastCamp.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await selectPastCamp.getPastCamps(centerNumber,todayDate).then(
    (camp) => {
       
      const camps = camp;
      return res.json({
        camps: camps
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });

     
  
});
module.exports = router;