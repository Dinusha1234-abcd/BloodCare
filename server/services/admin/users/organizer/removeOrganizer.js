const db = require('../../../db');

async function removeOrganizerAdmin(organizerNic){
   
     await db.query( `DELETE FROM blood_camp_organizer WHERE nic=?`,[organizerNic]);
  
}
module.exports = { removeOrganizerAdmin}
