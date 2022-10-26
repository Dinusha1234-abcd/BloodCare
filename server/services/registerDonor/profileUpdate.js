const db = require('../db');

async function updateDonor(id,firstName,lastName,NIC,gender,dateOfBirth,address,email,mobileNumber,province,district){
    const rows =await db.query(`UPDATE user INNER JOIN register_donor ON user.userNic =register_donor.userNic SET user.userNic = ?,  user.firstName =? , user.lastName =?  , user.gender =? , user.dateOfBirth =?  , user.email  =?, user.phoneNumber =?, user.address =?, register_donor.district =?, register_donor.province=? WHERE  register_donor.userNic=?`,[NIC, firstName, lastName, gender, dateOfBirth, email, mobileNumber,address, district, province, NIC]);
}

module.exports = {updateDonor}