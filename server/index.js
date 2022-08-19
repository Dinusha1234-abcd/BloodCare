const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8070; // asign the port number
const login = require('./routes/login');
const forgetPassword = require('./routes/forgetPassword')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
require("dotenv").config();
app.use(
    express.urlencoded({
        extended:true,
    }) 
) 

app.get("/",(req,res) => {
    res.json({message : "ok"})
});
app.use("/login",login);
app.use("/forgetpassword",forgetPassword);
app.use("/passwordchange",forgetPassword);
// app.use((err,req,res,next)=>{
//     const statusCode =  err.statusCode || 500;
//     console.error(err.message,err.stack);
//     res.status(statusCode).json({ message : err.message});
//     return;
// });

app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})