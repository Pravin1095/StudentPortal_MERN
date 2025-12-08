const Course = require('../mongoose-models/course-data')
const express = require('express')

const coursesRouter = express.Router()

coursesRouter.get('/get', async(req, res)=>{
    try{
 const courseData = await Course.find()
 res.status(200).json(courseData)
    }
    catch(err){
        res.status(400)
    }
   
})

coursesRouter.post('',async(req, res)=>{
    try{
const {body} = req
const courseData = new Course({...body, seatsAvailable : body.totalSeats})
await courseData.save()
res.status(201).json({message:"Added new course successfully"})
    }
    catch(err){
        console.log("check post err", err)
res.status(400).json({error: err})
    }
})

coursesRouter.patch('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const {seatsAvailable} = req.body
        if(seatsAvailable=='seatsAvailableDecrease'){
const cData = await Course.findById(id)
cData.seatsAvailable-=1
cData.save()
res.status(201).json({message : "Updated successfully"})
        }
else if(seatsAvailable==="seatsAvailableIncrease"){
    const cData = await Course.findById(id)
cData.seatsAvailable+=1
cData.save()
res.status(201).json({message : "Updated successfully"})
}

    }
    catch(err){
        console.log("check course patch err", err)
res.status(400).json({error : err})
    }
})

module.exports = coursesRouter