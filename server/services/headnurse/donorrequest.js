const db = require('../db');


async function getDonorRequest(campNumber){
    const rows =await db.query( `SELECT  * FROM registered_donation  LEFT JOIN register_donor ON 
        register_donor.userNic= registered_donation.NIC LEFT JOIN unregistered_donor ON
        unregistered_donor.Nic=registered_donation.NIC LEFT JOIN user ON user.userNic=register_donor.userNic  WHERE registered_donation.campNumber=?`,[campNumber]  );
    const data =rows;
    return rows;
}

module.exports = {getDonorRequest}