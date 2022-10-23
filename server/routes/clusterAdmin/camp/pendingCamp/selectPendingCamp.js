const express = require('express');
const router = express.Router();
const selectPendingCamp = require('../../../../services/clusterAdmin/camp/pendingCamp/selectPendingCamp');

router.post('/',  async function (req, res) {
  const clusterAdmin =  req.body.clusterAdminNic ;
  let centerNumber;
  await selectPendingCamp.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin)=>{
           centerNumber = clusterAdmin[0].bloodCenterNo;
     }
    ) 
  await selectPendingCamp.getPendingCamps(centerNumber).then(
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