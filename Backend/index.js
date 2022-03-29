const express = require('express');
const router = express.Router();
var bodyParser=require('body-parser');
const mongoose = require('mongoose');
const person=require('./Router/Router')
const app=express();
const port=8080;
var cors = require('cors');
var corsOptions={
    origin:'http://localhost:3000',
    optionsSucessStatus:200,
    methods:"GET,POST,PUT,DELETE"
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors(corsOptions))
app.use('/new',person)
app.listen(port,()=> console.log('Connected to port'))

mongoose.connect('mongodb://localhost:27017/ReactDB')
.then(()=>console.log('Connected'))
.catch(err => console.error('Something went wrong',err))

