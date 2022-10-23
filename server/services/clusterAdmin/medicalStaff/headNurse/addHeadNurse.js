const db = require('../../../db');


async function getBloodCenterNumber(clusterAdminNic) {
    const rows = await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`, [clusterAdminNic]);
    return rows;
}


async function insertHeadNurse(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber, hashpassword) {
    //get date
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //get time
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    await db.query(`INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
        [NIC, firstName, lastName, gender, dateOfBirth, '4', email, mobileNumber, address]);

    await db.query(`INSERT INTO  login ( userName , password, lastAccessTime, lastAccessDate) VALUES ( ?,?,?,?)`,
        [NIC, hashpassword, time, date]);

    await db.query(`INSERT INTO medical_staff(staffId, bloodCenterNo, type, userNic) VALUES (?,?,?,?)`,
        ['', centerNumber, 'headNurse', NIC]);
    await db.query(`INSERT INTO head_nurse  (headNurseId, bloodCenterNo, userNic ) VALUES (?,?,?,?)`,
        ['', centerNumber, NIC]);

}

module.exports = { insertHeadNurse, getBloodCenterNumber } 