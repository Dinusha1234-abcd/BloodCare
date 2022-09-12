const { hash } = require('bcrypt');
const express = require('express');
const router = express.Router();
const addHeadNurse = require('../../../../services/clusterAdmin/medicalStaff/headNurse/addHeadNurse');


router.post('/', async function (req, res) {
    //get the data
    const clusterAdmin = req.body.clusterAdminNic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const NIC = req.body.NIC;
    const address = req.body.address;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;
    
    //hash the password 
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    //intialize variable
    let gender;
    let dateOfBirth;
    let centerNumber;
    const getGender = () => { if (NIC.substr(3, 6) > 500) { return true } }
    console.log(parseInt(NIC.substr(3, 6)));
    //get month function
    function getMonth(dayData) {
        console.log(dayData);
        let num = dayData;
        if (dayData > 500) {
            num = num - 500;
        }
        return num / 30;
    }
    //get date function
    function getDate(dayData) {
        let num = dayData;
        if (dayData > 500) {
            num = num - 500;
        }
        return num % 30;
    }

    //check NIC number length
    if (NIC.length == 10) {
        const year = "19" + NIC.substr(0, 2);
        gender = (getGender ? "f" : "m");
        const month = getMonth(parseInt(NIC.substr(3, 6)));
        const day = getMonth(parseInt(NIC.substr(3, 6)));
        dateOfBirth = year + "-" + month + "-" + day;
    }
    if (NIC.length == 12) {
        const year = NIC.substr(0, 4);
        gender = () => { if (NIC.substr(3, 6) > 500) { rtprint("f") } else { print("m") } }
        const month = getMonth(parseInt(NIC.substr(5, 8)));
        const day = getDate(parseInt(NIC.substr(5, 8)));
        dateOfBirth = year + "-" + month + "-" + day;
    }
    await addHeadNurse.getBloodCenterNumber(clusterAdmin).then(
        (clusterAdmin) => {
            centerNumber = clusterAdmin[0].bloodCenterNo;
        }
    )
    await addHeadNurse.insertHeadNurse(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber, hashPassword).then(
        (user) => {

            return res.json({
                message: "success",
            });

        }
    ).catch((err) => {
        console.log(err);
        return res.json({ message: "unsucess" });
    });


});

module.exports = router;