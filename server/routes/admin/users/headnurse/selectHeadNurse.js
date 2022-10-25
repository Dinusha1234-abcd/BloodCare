const express = require('express');
const router = express.Router();
const selectHeadNurseAdmin = require('../../../../services/admin/users/headNurse/selectHeadNurse');

router.post('/',  async function (req, res) {

    await selectHeadNurseAdmin.getHeadNurseData().then(
        (user) => {
            const headNurses = user;
            return res.json({
                headNurses : headNurses
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;