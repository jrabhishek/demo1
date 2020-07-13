// const sequelize = require('./util/database');
// sequelize.sync().then((result) => {
    
// }).catch((err) => {
    
// });
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const registerRoutes = require('./routes/register');
const getStudent = require('./routes/student');


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/register',registerRoutes);
app.use('/student', getStudent);
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
   next(error);
    });
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        message:error.message
        
    })

});    
module.exports = app;