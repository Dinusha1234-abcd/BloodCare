const db = require('../../../db');

async function getMedicalOfficerData() {
    const rows = await db.query(`SELECT userNic, firstName, lastName, email, phoneNumber FROM user WHERE type = 3`);
    const data  = rows;
    return rows;
}
module.exports = {getMedicalOfficerData}