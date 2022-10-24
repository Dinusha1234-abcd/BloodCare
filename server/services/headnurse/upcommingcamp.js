const db = require('../db');



async function getUpcommingCamp(){
    const rows =await db.query( `SELECT * FROM blood_camp`);
    const data =rows;
    return rows;
}

module.exports = {getUpcommingCamp}