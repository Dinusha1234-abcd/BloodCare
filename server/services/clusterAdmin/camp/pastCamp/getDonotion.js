const db = require('../../../db');

async function getDonor(campNumber){
   
    const rows = await db.query(`SELECT * FROM register_donor INNER JOIN blood_donation ON register_donor.registerDonorId = blood_donation.registedDonorId  INNER JOIN Blood_counter ON Blood_counter.bloodCounterNo= blood_donation.bloodCounterNumber WHERE blood_donation.campNumber=? `,[campNumber]);
    return  rows ;
    
}
module.exports = {getDonor} 