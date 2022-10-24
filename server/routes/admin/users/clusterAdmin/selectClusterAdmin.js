const express = require('express');
const router = express.Router();
const selectClusterAdmin = require('../../../../services/admin/users/clusterAdmin/selectClusterAdmin');

router.post('/',  async function (req, res){
    
    await selectClusterAdmin.getClusterAdminData().then(
        (user) => {
            const clusterAdmins = user;
            return res.json({
                clusterAdmins : clusterAdmins
            })
        }
    ).catch((err) => {
        console.log(err);
        return res.json({ message: "Unsuccess"});
    });
});
module.exports = router;