const db = require('../../../db');

async function getMedicalOfficerData(adminNic) {
    const rows = await db.query(`SELECT * FROM user WHERE type = 3`,[adminNic]);
    const data  = rows;
    return rows;
}
module.exports = {getMedicalOfficerData}