const db = require('../../../db');

async function getUpcominCamps(date){
 
    const rows = await db.query( `
        SELECT * FROM blood_camp 
        INNER JOIN blood_camp_organizer 
        ON blood_camp.organizerNic = blood_camp_organizer.nic  
        INNER JOIN blood_center ON blood_center.bloodCenterNo  = blood_camp.bloodCenterNo  
        WHERE  blood_camp.status='accept' && blood_camp.date   > ? `,[date]);
    const data = rows;
    return  rows ;
  
    
}
 
module.exports = {getUpcominCamps } 