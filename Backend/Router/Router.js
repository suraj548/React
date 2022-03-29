const express=require('express');
const router = express.Router();
const Person = require('../models/people');

router.get('/app',(req,res)=>{
    Person.find({},(err,allPeople)=>{
        if(err)
            res.json({message:'Error in fetching data'})
        else
            res.json(allPeople);
    })
})

router.post('/app',async (req,res)=>{
    newP=new Person({
        age:req.body.age,
        name:req.body.name
    });
    await newP.save();
    res.send(newP);
})

// router.delete('/app:age',(req,res)=>{
//     var uage=req.params.name;
//     Person.findOneAndDelete({age:uage},(err)=>{
//         if(err)
//             res.send(err)
//         else
//             res.send(true)
//     })
// })
// router.get('/app:name',(req,res)=>{
//     var uname=req.params.name;
//     var x=Person.find({name:uname})
//     console.log(x);
// })
module.exports=router;