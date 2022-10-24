const db = require('../../../db');

async function getDriverData() {
    const rows = await db.query(`
        SELECT * FROM user 
        INNER JOIN medical_staff 
        ON user.userNic = medical_staff.userNic 
        WHERE medical_staff.medicalType = 'driver' && user.workStatus='1'`);
    const data  = rows;
    return rows;
}
module.exports = {getDriverData}