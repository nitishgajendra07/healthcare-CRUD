const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use('*', (req,res)=>{
    res.status(404).json("The page you are looking for does not exist");
});

app.listen(process.env.PORT, ()=>{
    console.log("server is listening at port ", process.env.PORT)
});