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

module.exports = studentsRouter