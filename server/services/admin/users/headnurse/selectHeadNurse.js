const db = require('../../../db');

async function getHeadNurseData() {
    const rows = await db.query(`SELECT * FROM user WHERE type = '4' && user.workStatus='1'`);
    const data  = rows;
    return rows;
}
module.exports = {getHeadNurseData}