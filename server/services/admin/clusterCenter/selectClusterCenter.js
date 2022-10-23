const db = require('../../db');

async function getClusterCenterData(){
    const rows = await db.query('SELECT * FROM blood_center ');
    const data = rows;
    return rows;
}
module.exports = {getClusterCenterData}