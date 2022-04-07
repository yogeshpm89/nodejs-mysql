const express = require('express')
const router = express.Router();
const Controller = require('./student.controller');


router.get('/', async (req, res, next) => {
    const data = await Controller.getAll();
    res.status(200).json({
        data: data
    });
});

router.post('/', async (req, res, next) => {
    const body = req.body;
    const data = await Controller.create(body);
    res.status(200).json({
        data: data
    });
});

module.exports = router;