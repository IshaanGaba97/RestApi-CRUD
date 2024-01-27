const express = require('express');
const router = express.Router();
const Student = require("../models/students");


router.post('/students', async (req, res)=>{
    try{
        const user = new Student(req.body);
        const userCreate = await user.save();
        res.status(201).send(userCreate);
    } catch(e){
        res.status(400).send(e);
    }
});


router.get('/students', async (req, res) => {
    try{    
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
})


router.get('/students/:id', async (req, res)=>{
     try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        } else {
            res.send(studentData);
        }   
     } catch (error) {
        res.status(500).send(error);
     }
})


router.patch('/students/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, { $set: req.body }, {new:true}); 
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.put('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.options('/students', (req, res) => {
    res.sendStatus(200);
});


router.delete('/students/:id', async (req, res)=>{
    try {
        const deletedStudentData = await Student.findByIdAndDelete(req.params.id);
        if(!deletedStudentData){
            return res.status(404).send();
        } else {
            res.send(deletedStudentData);
        }   
     } catch (error) {
        res.status(500).send(error);
     }
})

module.exports = router;