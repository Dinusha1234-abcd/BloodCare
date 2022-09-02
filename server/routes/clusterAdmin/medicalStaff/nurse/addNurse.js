const express = require('express');
const router = express.Router();
const addNurse = require('../../../../services/clusterAdmin/medicalStaff/nurse/addNurse');


router.post('/', async function (req, res) {
    //get the date
    const clusterAdmin = req.body.clusterAdminNic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const NIC = req.body.NIC;
    const address = req.body.address;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber;
    //initialize the variable 
    let gender;
    let dateOfBirth;
    let centerNumber;
    //get the gender
    const getGender = (number) => { if (number > 500) { return true } }
    //get the month
    function getMonth(dayData) {
        console.log(dayData);
        let num = dayData;
        if (dayData > 500) {
            num = num - 500;
        }
        return num / 30;
    }
    //get the date
    function getDate(dayData) {
        let num = dayData;
        if (dayData > 500) {
            num = num - 500;
        }
        return num % 30;
    }

    //cheack NIC number length
    if (NIC.length == 10) {
        const number = parseInt(NIC[2] + NIC[3] + NIC[4]);
        const year = "19" + NIC.substr(0, 2);
        gender = (getGender(number) ? "f" : "m");
        const month = getMonth(number);
        const day = getMonth(number);
        dateOfBirth = year + "-" + month + "-" + day;
    }

    if (NIC.length == 12) {
        const number = parseInt(NIC[4] + NIC[5] + NIC[6]);
        const year = NIC.substr(0, 4);
        gender = () => { if (number > 500) { print("f") } else { print("m") } }
        const month = getMonth(number);
        const day = getDate(number);
        dateOfBirth = year + "-" + month + "-" + day;
    }

    await addNurse.getBloodCenterNumber(clusterAdmin).then(
        (clusterAdmin) => {
            centerNumber = clusterAdmin[0].bloodCenterNo;
        }
    )

    await addNurse.insertNurse(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber ).then(
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