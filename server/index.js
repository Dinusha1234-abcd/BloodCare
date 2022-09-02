const express = require("express");  
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8070; // asign the port number
const login = require('./routes/login');
const forgetPassword = require('./routes/forgetPassword');
const passwordChange = require('./routes/passwordChange');
const campRegister  = require('./routes/campRegister')
app.maxConnections = 100;

//clusterAdmin
const addDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/addDoctor');
const selectDoctor = require('./routes/clusterAdmin/medicalStaff/doctor/selectDoctor'); 
const addDriver = require('./routes/clusterAdmin/medicalStaff/driver/addDriver');








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
app.use("/passwordchange",passwordChange);
app.use("/camp/register",campRegister);

//cluster Admin
app.use("/medicalstaff/doctor",addDoctor);
app.use("/medicalstaff/selectdoctor",selectDoctor);
app.use("/medicalstaff/driver",addDriver);

// app.use((err,req,res,next)=>{
//     const statusCode =  err.statusCode || 500;
//     console.error(err.message,err.stack);
//     res.status(statusCode).json({ message : err.message});
//     return;
// });

app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port} `);
})