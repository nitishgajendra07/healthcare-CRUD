const express = require('express');
const { addService, getAllServices, updateService } = require('../controllers/service.controller');

const serviceRouter = express.Router();



serviceRouter.route('/')
    .post(addService)
    .get(getAllServices)

serviceRouter.route('/:id')
    .patch(updateService)



module.exports = serviceRouter;
