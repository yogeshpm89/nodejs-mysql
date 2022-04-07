const express = require('express')
const router = express.Router();

const V1StudentRoute = require('./components/v1/student/student.routes');
// const V1TeacherRoute = require('./components/v1/teacher/teacher.routes');

router.use('/v1/students', V1StudentRoute);
// router.use('/v1/teachers', V1TeacherRoute);

module.exports = router;