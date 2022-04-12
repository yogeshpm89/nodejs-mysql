const express = require('express')
const router = express.Router();

const V1StudentRoute = require('./components/v1/student/student.routes');
const V1BookRoute = require('./components/v1/books/books.routes');

router.use('/v1/students', V1StudentRoute);
router.use('/v1/books', V1BookRoute);

module.exports = router;