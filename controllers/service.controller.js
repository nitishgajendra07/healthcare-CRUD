const { Mongoose } = require("mongoose");
const healthcareServiceModel = require("../models/healthcareService.model");

async function addService(req, res) {
    try {
        const { serviceName, description, price } = req.body;

        if (!serviceName || !description || !price || !serviceName.trim() || !description.trim()) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        if (isNaN(price)) {
            return res.status(400).json({ error: "Invalid price" });
        }

        const existingService = await healthcareServiceModel.findOne({ serviceName });
        if (existingService) {
            return res.status(400).json({ error: "Service already exists" });
        }
        const newService = await healthcareServiceModel.create({
            serviceName,
            description,
            price
        })

        res.status(200).json({ message: "service created successfully", service: newService });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = { addService }