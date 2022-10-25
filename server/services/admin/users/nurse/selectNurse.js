const db = require('../../../db');

async function getNurseData() {
    const rows = await db.query(`SELECT * FROM user INNER JOIN medical_staff ON user.userNic = medical_staff.userNic WHERE medical_staff.medicalType = 'Nurse' && user.workStatus='1'`);
    const data  = rows;
    return rows;
}
module.exports = {getNurseData}