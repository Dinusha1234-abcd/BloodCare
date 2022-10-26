const db = require('../../../db');

async function getOrganizerData() {
    const rows = await db.query(`
        SELECT * FROM blood_camp_organizer 
        `);
    const data  = rows;
    return rows;
}
module.exports = {getOrganizerData}