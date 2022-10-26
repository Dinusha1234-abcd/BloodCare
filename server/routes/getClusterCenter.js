const express = require('express');
const router = express.Router();
const getClusterCenter = require('../services/campRegister');

router.get('/', async function (req, res) {
    
   await getClusterCenter.getClusterCenter( ).then(
      (center) => {
       
            return res.json({
               centers: center,
            });
        
      }
   ).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
   });


});

module.exports = router;