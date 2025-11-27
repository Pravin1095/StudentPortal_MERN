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

module.exports = coursesRouter