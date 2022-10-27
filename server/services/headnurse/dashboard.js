const db = require('../db');



    async function getDashboard(){
       
        const rows = await db.query( ` `);
        
        
    

     

    const data =rows;
    return rows;

   // WHERE blood_counter.bloodRHtype='O+' && blood_camp.bloodCenterNo=1 && 
}

module.exports = {getDashboard}