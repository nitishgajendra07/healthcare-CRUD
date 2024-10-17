const express = require('express');
const { addService, getAllServices } = require('../controllers/service.controller');

const serviceRouter = express.Router();

serviceRouter.post('/add', addService)
    .get('/list', getAllServices)

module.exports = serviceRouter;
