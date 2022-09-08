const express = require('express');
const router = express.Router();
const selectNurse = require('../../../../services/clusterAdmin/medicalStaff/nurse/selectNurse');


router.post('/', async function (req, res) {

  const clusterAdmin = req.body.clusterAdminNic;
  let centerNumber;
  await selectNurse.getBloodCenterNumber(clusterAdmin).then(
    (clusterAdmin) => {
      centerNumber = clusterAdmin[0].bloodCenterNo;

    }
  )


  await selectNurse.getNurse(centerNumber).then(
    (user) => {

      const nurse = user;
      return res.json({
        nurses: nurse
      })
    }).catch((err) => {
      console.log(err);
      return res.json({ message: "unsucess" });
    });



});
module.exports = router;