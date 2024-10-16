const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./db/connectToDB");
const serviceRouter = require("./routers/service.router");
dotenv.config();

const app = express();

app.use(express.json())

app.use('/service', serviceRouter);


app.use('*', (req, res) => {
    res.status(404).json("The page you are looking for does not exist");
});

connectToDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server is listening at port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log("mongodb connection failed!!", err);
    })