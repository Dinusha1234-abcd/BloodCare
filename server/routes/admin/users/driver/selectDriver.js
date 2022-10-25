const express = require('express');
const router = express.Router();
const selectDriverAdmin = require('../../../../services/admin/users/driver/selectDriver');

router.post('/',  async function (req, res) {

    await selectDriverAdmin.getDriverData().then(
        (user) => {
            const drivers = user;
            return res.json({
                drivers : drivers
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;