const db = require('./db');
// const config = require('../config');

async function userLogin(userName){
    const rows = await db.query( `SELECT password FROM login WHERE userName=?`,[userName]);
    const data = rows;
    return  rows ;
}

module.exports = { userLogin } 