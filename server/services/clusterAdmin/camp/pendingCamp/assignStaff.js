const db = require('../../../db');


async function assignStaff(type,campNumber,staffId,bloodCenterNo){
     
    await db.query(`INSERT INTO  work_assign ( workId ,  bloodCenterNo ,  bloodCampNumber ,  staffId ) VALUES (?,? ,?,?  )`,['',bloodCenterNo,campNumber,staffId]); 
    if(type=='headNurse'){
        await db.query(`INSERT INTO headnurse_assign_bloodcamp (campNumber, headNurseId ) VALUES (?,?)`,[campNumber,staffId,]);
    }
}

module.exports = {assignStaff} 