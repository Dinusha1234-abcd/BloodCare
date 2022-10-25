const db = require('../../../db');

async function getAnegative(campNumber){
   
    const rows = await db.query( `SELECT 
    sum(blood_counter.bloodRHtype ='A-' && blood_camp.bloodCenterNo=? ) as Apositive,
    sum(blood_counter.bloodRHtype ='A-') as ApositiveAll FROM blood_counter 
    INNER JOIN blood_donation ON blood_counter.bloodCounterNo = blood_donation.bloodCounterNumber 
    INNER JOIN   blood_camp ON  blood_camp.bloodCampNumber= blood_donation.campNumber `,[campNumber]);
    return  rows ;
    
}
module.exports = {getAnegative} 