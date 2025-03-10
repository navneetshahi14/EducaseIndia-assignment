const express = require('express');
const { AddSchool, ListSchools } = require('../controller/schoolController');
const schoolRoute = express.Router()

schoolRoute.post('/addSchool',AddSchool)
schoolRoute.get('/listOfschool/',ListSchools)


module.exports = schoolRoute;
