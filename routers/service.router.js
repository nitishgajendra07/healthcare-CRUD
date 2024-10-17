const express = require('express');
const { addService, getAllServices, updateService, deleteService } = require('../controllers/service.controller');

const serviceRouter = express.Router();



serviceRouter.route('/')
    .post(addService)
    .get(getAllServices)

serviceRouter.route('/:id')
    .patch(updateService)
    .delete(deleteService)



module.exports = serviceRouter;
