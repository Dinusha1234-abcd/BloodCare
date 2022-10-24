const db = require('../db');


async function getUpcommingCamp(){
    const rows =await db.query( `SELECT date, place, name FROM blood_camp WHERE date > NOW()`);
    const data =rows;
    return rows;
}

module.exports = {getUpcommingCamp}