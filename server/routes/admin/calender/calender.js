const express = require('express');
const router = express.Router();
const calender = require('../../../services/admin/calender/calender');

router.post('/',  async function (req, res) {
  
 
  await calender.getCamp().then(
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