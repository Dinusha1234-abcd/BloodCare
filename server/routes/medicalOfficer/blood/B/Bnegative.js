const express = require('express');
const router = express.Router();
const Bnegative = require('../../../../services/clusterAdmin/blood/B/Bnegative');


router.post('/',  async function (req, res) {
  const clusterAdminNic =  req.body.clusterAdminNic ;

 
  await Bnegative.getBnegative(clusterAdminNic).then(
    (bloods) => {
       
      const blood = bloods ;
      return res.json({
        bloods: blood
      })
    }).catch((err) => {
        console.log(err) 
        return res.json({ message: "unsucess" }); 
      });

     
  
});
module.exports = router;