const db = require('../../../db');

async function getHeadNurseData() {
    const rows = await db.query(`SELECT * FROM user WHERE type = '4' `);
    const data  = rows;
    return rows;
}
module.exports = {getHeadNurseData}