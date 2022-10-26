const db = require('../db');



async function insertfoodType(campID,regDonorNic,foodType){
    await db.query( `INSERT INTO registered_donation (campNumber,NIC, foodType) VALUES(?,?,?)`,[campID,regDonorNic,foodType]);
   
}
module.exports ={insertfoodType}