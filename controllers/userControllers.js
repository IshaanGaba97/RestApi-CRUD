const Student = require("../models/students");
const mongoose = require('mongoose');

const createStudent = async(req, res) => {
    try{
        const user = new Student(req.body);
        const userCreate = await user.save();
        res.status(201).send(userCreate);
    } catch(e){
        res.status(400).send(e);
    }
}

const getAllStudent = async (req, res) => {
    try{    
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
}

const getStudentById = async (req, res)=>{
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
}

const updateStudent = async (req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, { $set: req.body }, {new:true}); 
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateStudentWithPut = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(error);
    }
}

const optionStudent = (req, res) => {
    res.sendStatus(200);
}

const deleteStudent = async (req, res)=>{
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
}

module.exports = {createStudent, getAllStudent, getStudentById, updateStudent, updateStudentWithPut, optionStudent, deleteStudent};