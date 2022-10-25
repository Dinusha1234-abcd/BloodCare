const express = require('express');
const router = express.Router();
const selectDonor = require('../../../services/medicalOfficer/registerDonor/selectDonor');


router.get('/', async function (req, res) {

  await selectDonor.getDonor().then(
    (user) => {

      const donors = user;
      return res.json({
        donors: donors
      })
    }).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
    });



});
module.exports = router;