const express = require('express');
const router = express.Router();
const selectDonorAdmin = require('../../../../services/admin/users/donor/selectDonor');

router.post('/',  async function (req, res) {

    await selectDonorAdmin.getDonorData().then(
        (user) => {
            const donors = user;
            return res.json({
                donors : donors
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;