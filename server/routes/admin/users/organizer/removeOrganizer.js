const express = require('express');
const router = express.Router();
const removeOrganizerAdmin = require('../../../../services/admin/users/organizer/removeOrganizer');

router.post('/', async function (req, res) {

    const organizerNic = req.body.organizerNic;
   
    await removeOrganizerAdmin.removeOrganizerAdmin(organizerNic).then(
         () => {

            return res.json({
                message: "success",
            });

        }
    ).catch((err) => {
      
        return res.json({ message: "unsucess" });
    });


});

module.exports = router;