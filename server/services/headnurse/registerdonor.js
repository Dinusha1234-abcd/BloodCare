const db = require('../../db');

async function insertDonor(province, district, userNic){

    await db.query(`INSERT INTO register_donor (province, district, userNic) VALUES (?, ?, ?)`,
    [province, district, userNic]);
}

module.exports = {insertDonor} 