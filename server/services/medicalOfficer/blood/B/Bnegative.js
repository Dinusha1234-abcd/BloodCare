const db = require('../../../db');

async function getBnegative(campNumber){
   
    const rows = await db.query( `SELECT 
    sum(blood_counter.bloodRHtype ='B-' && blood_camp.bloodCenterNo=? ) as Bnegative,
    sum(blood_counter.bloodRHtype ='B-') as BnegativeAll FROM blood_counter 
    INNER JOIN blood_donation ON blood_counter.bloodCounterNo = blood_donation.bloodCounterNumber 
    INNER JOIN   blood_camp ON  blood_camp.bloodCampNumber= blood_donation.campNumber `,[campNumber]);
    return  rows ;
    
}
module.exports = {getBnegative} 