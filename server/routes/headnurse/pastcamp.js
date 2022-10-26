const express = require('express');
const router = express.Router();
const pastcamp = require('../../services/headnurse/pastcamp');


router.get('/',async function(req, res) {
    await pastcamp.getPastCamp().then(
        (pastcamps) =>{
            const pastcamp = pastcamps;
            return res.json({
                pastcamp : pastcamp
            })
        }).catch((err) => {
            console.log(err);
            return res.json({message: "Unsucess"});
        });
});
module.exports = router;