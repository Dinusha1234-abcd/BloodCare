const express = require('express');
const router = express.Router();
const selectOrganizerAdmin = require('../../../../services/admin/users/organizer/selectOrganizer');

router.post('/',  async function (req, res) {

    await selectOrganizerAdmin.getOrganizerData().then(
        (user) => {
            const organizers = user;
            return res.json({
                organizers : organizers
            } )
        }).catch((err) => {
            console.log(err);
            return res.json({ message: "Unsuccess"});
        });
});
module.exports = router;