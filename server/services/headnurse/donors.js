const db = require('../db');


async function getDonors(){
    const rows =await db.query( `SELECT user.userNic, user.firstName, user.phoneNumber, user.address, register_donor.registerDonorId  FROM user INNER JOIN register_donor ON user.userNic = register_donor.userNic `);
    const data =rows;
    return rows;
}

module.exports = {getDonors}