const { findByIdAndUpdate } = require('../mongoose-models/course-data')
const Student = require('../mongoose-models/student_data')
const express = require('express')

const studentsRouter = express.Router()

studentsRouter.get('/get', async(req,res)=>{
    try{
const studentData = await Student.find()
res.status(200).json(studentData)
    }
    catch(err){
        console.log("check backend get err", err)
        res.status(400).json({error : err})
    }
    

})

studentsRouter.get('/get/:id', async(req, res)=>{
    try{
const {id} = req.params
const editStudent = await Student.findOne({_id : id})
res.status(200).json(editStudent)
    }
    catch(err){
res.status(400)
    }
})

studentsRouter.post('/add',async(req, res)=>{
    try{
const {body} = req
const studentData = new Student(body)
await studentData.save()
res.status(201).json({message : 'Student added successfully'})
    }
    catch(err){
        console.log("check backend err", err)
res.status(400)
    }
})

studentsRouter.patch('/add/:id',async(req, res)=>{
    try{
const {id} = req.params
const {body} = req
if(body.subject){
const res = await Student.findByIdAndUpdate(id, {$set:{
    [`marks.${body.subject}`]  : Number(body.score)
}})
}
else{
const studentData = await Student.findByIdAndUpdate(id,body)
}

res.status(201).json({message : 'Updated successfully'})
    }
    catch(err){
        console.log("check backend err", err)
res.status(400)
    }
})

module.exports = studentsRouter