const db = require('../db');

async function getAllCamp(date){
    const rows =await db.query( `SELECT * FROM blood_camp WHERE status='accept' && blood_camp.date >=?`,[date]);
    const data =rows;
    return rows;
}

module.exports = {getAllCamp}