const db = require('../../../db');

async function insertClusterAdmin(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber, hashpassword){
    //get date
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //get time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    await db.query(`INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
        [NIC, firstName, lastName, gender, dateOfBirth, '2', email, mobileNumber, address]);

    await db.query(`INSERT INTO  login ( userName , password, lastAccessTime, lastAccessDate) VALUES ( ?,?,?,?)`,
        [NIC, hashpassword, time, date]);

    await db.query(`INSERT INTO cluster_center_administator  (centerAdministatorId, bloodCenterNo, userNic ) VALUES (?,?,? )`,
        ['', centerNumber, NIC]);

}

module.exports = {insertClusterAdmin}