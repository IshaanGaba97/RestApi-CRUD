const express = require('express');
require('../db/conn');
const app = express();
const Student = require("../models/students");
const studentRouter = require("../router/student");
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(studentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up and running on ${PORT}`);
});
