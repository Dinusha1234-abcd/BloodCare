const db = require('../db');


async function getUpcommingCamp(){
    const rows =await db.query( `SELECT bloodCampNumber,date, place, name, bloodCampNumber AS upcommingcount FROM blood_camp WHERE date > NOW()`);
    const data =rows;
    return rows;
}

module.exports = {getUpcommingCamp}  