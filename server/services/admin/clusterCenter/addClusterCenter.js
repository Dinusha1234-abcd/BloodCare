const db = require('../../db');

async function insertClusterCenter(province, district, name, address){

    await db.query(`INSERT INTO blood_center (province, district, name, address) VALUES (?, ?, ?, ?)`,
    [province, district, name, address]);
}

module.exports = {insertClusterCenter}