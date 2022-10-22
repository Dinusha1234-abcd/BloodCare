const db = require('../../../db');


async function getBloodCenterNumber(clusterAdminNic) {
    const rows = await db.query(`SELECT bloodCenterNo FROM  cluster_center_administator  WHERE userNic=?`, [clusterAdminNic]);
    return rows;
}


async function insertNurse(centerNumber, firstName, lastName, NIC, gender, dateOfBirth, address, email, mobileNumber) {

    await db.query(`INSERT INTO  user (userNic,firstName ,lastName,gender,dateOfBirth,type,email, phoneNumber,address) VALUES (?,?,?,?,?,?,?,?,?)`,
        [NIC, firstName, lastName, gender, dateOfBirth, '6', email, mobileNumber, address]);


    await db.query(`INSERT INTO medical_staff(staffId, bloodCenterNo, type, userNic) VALUES (?,?,?,?)`,
        ['', centerNumber, 'nurse', NIC]);

}


module.exports = { insertNurse, getBloodCenterNumber } 