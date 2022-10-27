const db = require('../../db');

async function getCamp(){
   
    const rows = await db.query( `SELECT * FROM blood_camp WHERE status='accept'`);
    return  rows ;
    
}
module.exports = {getCamp} 