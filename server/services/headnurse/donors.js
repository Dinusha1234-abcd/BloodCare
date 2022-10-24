const db = require('../db');


async function getDonors(){
    const rows =await db.query( `SELECT * FROM register_donor`);
    const data =rows;
    return rows;
}

module.exports = {getDonors}