const db = require('../../../db');

async function updateDonor(id,firstName,lastName,NIC,gender,dateOfBirth,address,email,mobileNumber,province,district){
    const rows =await db.query(`UPDATE user INNER JOIN register_donor ON user.userNic =register_donor.userNic SET user.userNic = ?,  `);
}

module.exports = {updateDonor}