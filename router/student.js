const express = require('express');
const router = express.Router();
const Student = require("../models/students");

const {createStudent, getAllStudent, getStudentById, updateStudent, updateStudentWithPut, optionStudent, deleteStudent} = require('../controllers/userControllers')

router.post('/students', createStudent);

router.get('/students', getAllStudent)

router.get('/students/:id', getStudentById);

router.patch('/students/:id', updateStudent);

router.put('/students/:id', updateStudentWithPut);

router.options('/students', optionStudent);

router.delete('/students/:id', deleteStudent);

module.exports = router;