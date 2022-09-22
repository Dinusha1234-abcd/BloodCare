const db = require('../../../db');


async function getClusterAdminData(){
    const rows =await db.query( `SELECT userNic, firstName, email,phoneNumber FROM user WHERE Type=2`);
    // const data =rows;
    return rows;
}

module.exports = {getClusterAdminData}