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

async function getAllServices(req, res) {
    try {
        const services = await healthcareServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" });
    }
}

async function updateService(req, res) {
    try {
        console.log("Entered updateService")
        const { id } = req.params;
        const { serviceName, description, price } = req.body;
        if (description && !description.trim()) {
            return res.status(400).json({ error: "Invalid description" });
        }
        if (price && isNaN(price)) {
            return res.status(400).json({ error: "Invalid price" });
        }
        if (serviceName) {
            if (!serviceName.trim()) {
                return res.status(400).json({ error: "Invalid service name" });
            }
            const existingService = await healthcareServiceModel.find({ serviceName });
            if (existingService) {
                return res.status(400).json({ error: "service with this name already exists" });
            }
        }

        const updatedService = await healthcareServiceModel.findByIdAndUpdate(id, {
            serviceName,
            description,
            price
        },
            {
                new: true
            })

        res.status(200).json({ message: "updated successfully", updatedService })


    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function deleteService(req, res) {
    try {
        const { id } = req.params;
        const deletedService = await healthcareServiceModel.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(200).json({ error: "Service not found" });
        }
        res.status(200).json({ message: 'Service deleted successfully', deletedService });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = { addService, getAllServices, updateService, deleteService }