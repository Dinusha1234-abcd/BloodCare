const db = require('../../../db');

async function getClusterAdminData() {
    const rows = await db.query(`SELECT userNic, firstName, lastName, email, phoneNumber FROM user WHERE type = 2`);
    const data  = rows;
    return rows;
}
module.exports = {getClusterAdminData}