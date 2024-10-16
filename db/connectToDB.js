const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const connectToDB = async () => {
    try {
        const database = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`connected to ${database.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = { connectToDB }