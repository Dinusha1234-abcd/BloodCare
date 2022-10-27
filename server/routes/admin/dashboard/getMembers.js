const express = require('express');
const router = express.Router();
const members = require('../../../services/admin/dashboard/getMembers');

router.post('/',  async function (req, res) {
 
  await members.getMembers().then(
    (users) => {
       
      const user = users ;
      return res.json({
        users: user
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" });
      });   
  
});


module.exports = router;