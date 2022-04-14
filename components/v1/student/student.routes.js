const express = require('express');
const responseTime = require('../../../middlewares/reponse.time');
const requestLogger = require('../../../middlewares/request.log');
const router = express.Router();
const Controller = require('./student.controller');


router.get('/', 
    requestLogger, 
    async (req, res, next) => {
        console.log('GET /students middleware 4');
        const data = await Controller.getAll();
        req.data = data;
        req.status = 200;
        // res.status(200).json({
        //     data: data
        // });
        next();
    },
    responseTime
);

router.post('/', 
    requestLogger, 
    async (req, res, next) => {
        const body = req.body;
        const data = await Controller.create(body);
        req.data = data;
        req.status = 200;
        next();
    },
    responseTime
);

module.exports = router;