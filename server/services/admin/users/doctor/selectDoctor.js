const db = require('../../../db');

async function getDoctorData() {
    const rows = await db.query(`SELECT * FROM user INNER JOIN medical_staff ON user.userNic = medical_staff.userNic WHERE medical_staff.medicalType = 'doctor' && user.workStatus='1'`);
    const data  = rows;
    return rows;
}
module.exports = {getDoctorData}