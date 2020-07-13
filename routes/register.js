const express = require('express');
const router = express.Router();
const Student = require('../models/students');

router.post('/',(req,res,next)=>{
    const student = {
        name:req.body.name,
        roll:req.body.roll,
        contact:req.body.contact
    };
    
    Student.create({
        name:student.name,
        roll:student.roll,
        contact:student.contact
    }).then((result) => {
        console.log(result);
        res.status(200).json({
            message: "helloe world",
            student: student
        });
        
    }).catch((err) => {
        res.status(400).json({
            message:err.message
        });
        
    });

    
});

module.exports = router;