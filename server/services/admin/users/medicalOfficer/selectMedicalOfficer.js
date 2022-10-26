const db = require('../../../db');

async function getMedicalOfficerData() {
    const rows = await db.query(`SELECT *  FROM user INNER JOIN medical_staff ON medical_staff.userNic = user.userNic WHERE user.type = 3 && user.workStatus = '1'`);
    const data  = rows;
    return rows;
}
module.exports = {getMedicalOfficerData}