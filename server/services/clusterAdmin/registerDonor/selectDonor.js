const db = require('../../db');

 
async function getDonor(){
    const rows = await db.query( `SELECT *  FROM user  INNER JOIN register_donor ON user.userNic = register_donor.userNic INNER JOIN registerdonorbloodgroup ON registerdonorbloodgroup.id = register_donor.registerDonorId  WHERE user.type = '5'` );
    const data = rows;
    return  rows ;
  
    
}
 

module.exports = {getDonor} 