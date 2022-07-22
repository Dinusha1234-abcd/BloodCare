const express = require("express");  
const app = express();
const port = 3000; // asign the port number

app.use(
    express.urlencoded({
        extended:true,
    }) 
) 

app.get("/",(req,res) => {
    res.json({message : "ok"})
});

app.use((err,req,res,next)=>{
    const statusCode =  err.statusCode || 500;
    console.error(err.message,err.stack);
    res.status(statusCode).json({ message : err.message});
    return;
});

app.listen(port,()=>{
    console.log(`Server listing at https://localhost:${port} `);
})