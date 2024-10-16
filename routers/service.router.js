const express = require('express');
const { addService } = require('../controllers/service.controller');

const serviceRouter = express.Router();

serviceRouter.post('/add', addService)

module.exports = serviceRouter;
