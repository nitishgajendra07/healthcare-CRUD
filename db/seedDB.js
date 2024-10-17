const fs = require('fs');
const mongoose = require('mongoose');
const { connectToDB } = require('./connectToDB');
const healthcareServiceModel = require('../models/healthcareService.model');
require('dotenv').config();

async function seedFromJson() {
  try {
    await connectToDB();
    
    const data = fs.readFileSync('./healthcareServices.json', 'utf8');
    const services = JSON.parse(data);

    await healthcareServiceModel.deleteMany({});
    console.log('Existing services removed');

    await healthcareServiceModel.insertMany(services);
    console.log('Services seeded successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
}

seedFromJson();
