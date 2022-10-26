const db = require('../../../db');

async function getABnegative(campNumber){
   
    const rows = await db.query( `SELECT 
    sum(blood_counter.bloodRHtype ='AB-' && blood_camp.bloodCenterNo=? ) as ABnegative,
    sum(blood_counter.bloodRHtype ='AB-') as ABnegativeAll FROM blood_counter 
    INNER JOIN blood_donation ON blood_counter.bloodCounterNo = blood_donation.bloodCounterNumber 
    INNER JOIN   blood_camp ON  blood_camp.bloodCampNumber= blood_donation.campNumber `,[campNumber]);
    return  rows ;
    
}
module.exports = {getABnegative} 