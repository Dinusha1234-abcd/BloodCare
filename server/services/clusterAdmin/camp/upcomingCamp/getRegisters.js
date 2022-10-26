const db = require('../../../db');

async function getRegiters(campNumber){
   
    const rows = await db.query( `SELECT sum(previousReg ='true') as preReg,sum(previousReg ='false') as newReg,sum(foodType='Veg') as vegReg FROM registered_donation WHERE campNumber=?`,[campNumber]);
    return  rows ;
    
}
module.exports = {getRegiters} 