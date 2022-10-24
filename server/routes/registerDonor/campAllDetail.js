const express = require('express');
const router = express.Router();
const campAllDetail = require('../../services/registerDonor/campAllDetail');

router.post('/',async function(req, res){
    var todayDate = new Date().toISOString().slice(0,10);
    await campAllDetail.getAllCamp(todayDate).then(
        (user) =>{
            const allCamps =user;
            return res.json({
                allCamps : allCamps 
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;