const { Mongoose } = require("mongoose");
const healthcareServiceModel = require("../models/healthcareService.model");

async function addService(req, res) {
    try {
        const { serviceName, description, price } = req.body;
        if (!serviceName || !description || !price || !serviceName.trim() || !description.trim()) {
            res.status(400).json("Missing required fields");
        }
        if (isNaN(price)) {
            res.status(400).json("Invlaid price");
        }

        const existingService = await healthcareServiceModel.findOne({ serviceName });
        if (existingService) {
            res.status(400).json({ message: "Service already exists" });
        }
        const newService = await healthcareServiceModel.create({
            serviceName,
            description,
            price
        })

        res.status(200).json({ message: "service created successfully", service: newService });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = { addService }