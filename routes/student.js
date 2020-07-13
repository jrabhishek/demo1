const express = require('express');
const router = express.Router();
const Student = require('../models/students');

router.get('/', (req, res, next) => {
    Student.findAll().then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(400).json({
            message:err.message
        })

        
    });
    
});

router.get('/:roll', (req, res, next) => {
    const id = req.params.roll;
    Student.findByPk(id).then((result) => {
        if(result == null){
            res.status(404).json({
                message:"not fount"
            });
        }
        else{
        res.status(200).json(result);}
        
    }).catch((err) => {
        res.status(400).json({
            message:err.message
        })
        
    });
    
});

module.exports = router;