const db = require('../../../db');


async function assignStaff(userNic,campNumber,staffId,bloodCenterNo){
     
    const rows = await db.query(`INSERT INTO  work_assign ( workId ,  bloodCenterNo ,  bloodCampNumber ,  staffId ) VALUES (?,? ,?,?  )`,['',bloodCenterNo,campNumber,staffId]); 
  
}

module.exports = {assignStaff} 