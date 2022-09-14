const db = require('../db');



async function getCamp(){
    const rows =await db.query( `SELECT * FROM blood_camp`);
    const data =rows;
    return rows;
}

module.exports = {getCamp}