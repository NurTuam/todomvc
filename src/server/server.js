const express =require("express")
const bodyParser=require('body-parser')
const Express = require('express');
const BodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();
const Router = express.Router();


//process.on('unhandledRejection', error => {
//console.error('unhandledRejection', error);
//process.exit(1) // To exit with a 'failure' code
//});

app.use(BodyParser());
app.use(cookieParser());
app.use('/user',require('./user'))

app.listen(5858)
