const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id is required"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
});

// we will create a new Collection using model 
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student; 