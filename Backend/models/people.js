const { string } = require('mathjs');
const mongoose = require('mongoose');
const Person=new mongoose.Schema({
    age:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})
var person=mongoose.model('Person',Person,'person')
module.exports=person