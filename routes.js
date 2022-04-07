const express = require('express')
const router = express.Router()

const V1StudentRoute = require('./components/v1/student/student.routes');

router.use('/v1/students', V1StudentRoute);

module.exports = router;