const express = require('express');
const router = express.Router();
const selectDriver = require('../../../../services/clusterAdmin/medicalStaff/driver/selectDriver');


router.post('/', async function (req, res) {

  const clusterAdmin = req.body.clusterAdminNic;
  let centerNumber;
  await selectDriver.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin) => {
      centerNumber = clusterAdmin[0].bloodCenterNo;

    }
  )

  await selectDriver.getDrivers(centerNumber).then(
    (user) => {

      const driver = user;
      return res.json({
        drivers: driver
      })
    }).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
    });



});
module.exports = router;