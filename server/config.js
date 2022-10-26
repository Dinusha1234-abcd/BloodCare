require("dotenv").config();
const hostname = process.env.SERVER;
const userName = process.env.UID;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
console.log(hostname);

const config = {
    db:{
        host : hostname,
        user : userName,
        password :password   ,
        database : database,
        connectionLimit: 400
    }
}

module.exports = config