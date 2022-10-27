const db = require('../db');

async function getregDonorCamp(regDonorNic){
   
    const rows = await db.query( `SELECT * FROM blood_camp INNER JOIN register_donor WHERE status='accept' && register_donor.userNic=? `,[regDonorNic]);
    return  rows ;
    
}
module.exports = {getregDonorCamp} 