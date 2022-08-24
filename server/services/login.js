const db = require('./db');
// const config = require('../config');

async function userLogin(userName){
    const rows = await db.query( `SELECT * FROM login INNER JOIN user ON login.userName = user.userNic INNER JOIN roles ON roles.id=user.type WHERE login.userName=?`,[userName]);
    const data = rows;
    return  rows ;
}

module.exports = { userLogin } 


