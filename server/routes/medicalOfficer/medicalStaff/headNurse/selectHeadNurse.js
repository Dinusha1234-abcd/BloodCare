const express = require('express');
const router = express.Router();
const headNurse = require('../../../../services/clusterAdmin/medicalStaff/headNurse/selectHeadNurse');


router.post('/', async function (req, res) {

  const clusterAdmin = req.body.clusterAdminNic;
  let centerNumber;
  await headNurse.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin) => {
      centerNumber = clusterAdmin[0].bloodCenterNo;

    }
  )

  await headNurse.getHeadNurse(centerNumber).then(
    (user) => {

      const headNurse = user;
      return res.json({
        headNurses : headNurse
      })
    }).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
    });



});
module.exports = router;