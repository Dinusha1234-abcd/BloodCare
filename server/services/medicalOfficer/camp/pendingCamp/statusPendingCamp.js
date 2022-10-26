const db = require('../../../db');


async function updateStatus(status,campNumber){
    const rows = await db.query(`UPDATE  blood_camp  SET status=? WHERE bloodCampNumber=?`,[status,campNumber]); 
  
}

module.exports = {updateStatus} 