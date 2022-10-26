const db = require('../../../db');

async function getOnegative(campNumber){
   
    const rows = await db.query( `SELECT 
    sum(blood_counter.bloodRHtype ='O-' && blood_camp.bloodCenterNo=? ) as Onegative,
    sum(blood_counter.bloodRHtype ='O-') as OnegativeAll FROM blood_counter 
    INNER JOIN blood_donation ON blood_counter.bloodCounterNo = blood_donation.bloodCounterNumber 
    INNER JOIN   blood_camp ON  blood_camp.bloodCampNumber= blood_donation.campNumber `,[campNumber]);
    return  rows ;
    
}
module.exports = {getOnegative} 