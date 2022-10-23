const db = require('../db');



async function getCamp(){
    const rows =await db.query( `SELECT blood_camp.date, blood_camp.place FROM blood_camp INNER JOIN user WHERE status='accept'`);
    const data =rows;
    return rows;
}

module.exports = {getCamp}