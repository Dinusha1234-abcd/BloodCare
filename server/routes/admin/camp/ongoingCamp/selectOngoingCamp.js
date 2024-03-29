const express = require('express');
const router = express.Router();
const selectOngoingCamp = require('../../../../services/admin/camp/ongoingCamp/selectOngoingCamp');

router.get('/',  async function (req, res) {
  
  let centerNumber;
  var todayDate = new Date().toISOString().slice(0, 10);
  
  await selectOngoingCamp.getOngoingCamps(todayDate).then(
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