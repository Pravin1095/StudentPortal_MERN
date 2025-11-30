const Enrollment = require('../mongoose-models/enrollment-data')
const express = require('express')

const enrollRouter = express.Router()


enrollRouter.post('/:sid/:cid',async(req,res)=>{
    try{

    
    const {sid, cid} = req.params
    const {enrollmentDate} = req.body 
    const enrollCourse = new Enrollment({
        studentId : sid,
        courseId : cid,
        enrolledOn : enrollmentDate
    })
    await enrollCourse.save()
    res.status(201).json({message : 'Enrolled successfully'})
}
catch(err){
    res.status(400)
}
})

enrollRouter.get('/get', async(req, res)=>{
    try{
const EnrolledData = await Enrollment.find()
.populate('studentId','name').populate('courseId','courseName')
res.status(200).json(EnrolledData)
    }
    catch(err){
res.status(400)
console.log("enroll schema",Enrollment.schema.paths);
console.log("check get enroll error", err)
    }
})

enrollRouter.delete('/:id', async(req, res)=>{
    try{
        const {id} = req.params
const EnrollData = await Enrollment.findByIdAndDelete(id)
res.status(200).json({message : "Deleted successfully"})
    }
    catch(err){
        res.status(400)
    }
    
})

module.exports = enrollRouter