const db = require('../db');

async function getCampId(campID){
    const rows = await db.query( `SELECT bloodCampNumber, name FROM blood_camp WHERE bloodCampNumber=?`,[campID]);
    return rows;
}

async function getRegisterformDetails(donorNIC){
    const rows =await db.query(`SELECT firstName, lastName FROM user WHERE userNic=? `,[donorNIC]);
    const data =rows;
    return rows;
}
module.exports = {getCampId, getRegisterformDetails}