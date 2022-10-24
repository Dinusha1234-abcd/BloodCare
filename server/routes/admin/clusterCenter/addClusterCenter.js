const express = require('express');
const router = express.Router();
const addClusterCenter = require('../../../services/admin/clusterCenter/addClusterCenter');

router.post('/', async function(req, res){
    const province = req.body.province;
    const district = req.body.district;
    const name = req.body.name;
    const address = req.body.address;
 
    

    await addClusterCenter.insertClusterCenter(province,district,name,address).then(
        (clusterCenter) => {
            return res.json({
                message: "success",
            });
        }
    ).catch((err) => {
        console.log(err);
        return res.json({message : "unsuccess"});
    });

});
module.exports = router;