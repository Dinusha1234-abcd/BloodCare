const db = require('../../../db');

async function getDonorData() {
    const rows = await db.query( `
        SELECT *  FROM user  
        INNER JOIN register_donor 
        ON user.userNic = register_donor.userNic 
        WHERE user.type = '5'` );
    const data  = rows;
    return rows;
}
module.exports = {getDonorData}