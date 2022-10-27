const express = require('express');
const router = express.Router();
const selectUpcomingCamp = require('../../../../services/admin/camp/upcomingCamp/selectUpcomingCamp');

router.get('/',  async function (req, res) {
  
  let centerNumber;
  var todayDate = new Date().toISOString().slice(0, 10);
  
  await selectUpcomingCamp.getUpcominCamps(todayDate).then(
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