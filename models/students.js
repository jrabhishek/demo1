const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Student = sequelize.define('student',{
    roll:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    contact:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

},{timestamp:false});

module.exports = Student;
