const db = require('./db');

function joinCamp(FirstName, LastName, NIC, Address, Email, MobileNumber){
 db.query(`INSERT INTO  blood_camp ( unregisterNumber , firstName , lastName, Nic) VALUES ( ?,?,?,?)`,
    [ '', FirstName, LastName, NIC,]);
}

module.exports = { joinCamp } 