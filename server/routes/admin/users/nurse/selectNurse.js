const express = require('express');
const router = express.Router();
const selectNurseAdmin = require('../../../../services/admin/users/nurse/selectNurse');

router.post('/',  async function (req, res) {

    await selectNurseAdmin.getNurseData().then(
        (user) => {
            const nurses = user;
            return res.json({
                nurses : nurses
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;