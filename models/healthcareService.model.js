const mongoose = require("mongoose");

const healthcareServiceSchema = new mongoose.Schema(
    {
        serviceName: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const healthcareServiceModel = mongoose.model("healthCareService", healthcareServiceSchema);

module.exports = healthcareServiceModel;