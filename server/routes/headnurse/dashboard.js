const express = require('express');
const router = express.Router();
const pastcamp = require('../../services/headnurse/dashboard');


router.get('/',async function(req, res) {
    await dashboard.getDashboard().then(
        (dash) =>{
            const dashboard = dash;
            return res.json({
                dashboard : dashboard
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;