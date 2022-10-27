const db = require('../../../db');

async function insertMedicalOfficer(bloodCenterNo, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber,   hashpassword){
    //get date
    var today = new Date();
    console.log(gender);
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //get time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    await db.query(`INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
        [NIC, firstName, lastName, gender, dateOfBirth, '3', email, mobileNumber, address]);

    await db.query(`INSERT INTO  login ( userName , password, lastAccessTime, lastAccessDate) VALUES ( ?,?,?,?)`,
        [NIC, hashpassword, time, date]);

    await db.query(`INSERT INTO medical_staff(staffId, bloodCenterNo, medicalType, userNic) VALUES (?,?,?,?)`,
        ['', bloodCenterNo, 'medicalOfficer', NIC]);

    await db.query(`INSERT INTO medical_officer  (medicalOfficerId, BloodCenterNo, userNic ) VALUES (?,?,? )`,
        ['', bloodCenterNo, NIC]);

    

}

module.exports = {insertMedicalOfficer}