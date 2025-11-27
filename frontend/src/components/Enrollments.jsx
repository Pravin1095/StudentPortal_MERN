import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { formatDate } from "../common/helper"

export default function Enrollments() {

    const url = 'http://localhost:8000/api'
    const [studentData, setStudentData] = useState([])
    const [courseData, setCourseData] = useState([])
    const [selectedStudentId, setSelectedStudentId] = useState('')
    const [selectedCourseId, setSelectedCourseId] = useState('')
    const [enrollmentDate, setEnrollmentDate] = useState('');
    const [enrolledData, setEnrolledData] = useState([])
  
    useEffect(()=>{
  handleGetStudentData()
  handleGetCourse()
  handleGetEnroll()
    },[])
  
    const handleGetEnroll = async()=>{
try{
const res = await axios.get(`${url}/enroll/get`)
setEnrolledData(res.data)
}catch(err){

}
    }

    console.log("check enrolledData", enrolledData)
    const handleGetStudentData = async()=>{
      try{
   const res = await axios.get(`${url}/students/get`)
        console.log("check res", res)
        setStudentData(res.data)
      }
      catch(err){
        console.log("check frontend get", err)
      }
       
    }

    const handleGetCourse = async()=>{
    const res = await axios.get(`${url}/courses/get`)
    setCourseData(res.data)
      }

      const handleEnrollment = async()=>{
        try{
          const res = await axios.post(`${url}/enroll/${selectedStudentId}/${selectedCourseId}`,{enrollmentDate})
          alert(res.data.message)
          handleGetEnroll()
        }
        catch(err){

        }
      }

      console.log("check disable",!selectedCourseId && !selectedStudentId, selectedStudentId, selectedCourseId)

      const handleEnrollChange = (e)=>{
console.log("check enroll change", e.target.value)
const {name, value} = e.target
switch(name){
  case 'studentOption':
    setSelectedStudentId(value)
    break
  case 'courseOption':
    setSelectedCourseId(value)
    break
  default:
    break

}

console.log("name, val", name,value)
      }

      const handleDateChange =(e)=>{
console.log("chevk date", e.target.value)
setEnrollmentDate(new Date(e.target.value))
      }
  return (
    <div>
      <h2>Enrollments</h2>

      <form id="enrollForm">
        <label>Student</label>
        <select name='studentOption' onChange={(e)=>handleEnrollChange(e)} id="enrollStudentSelect">
        <option>Select Student</option>
          {studentData && studentData.map((data)=>{return <option key={data._id} value={data._id}>{data.name}</option>})}
        </select>

        <label>Course</label>
        <select name='courseOption' onChange={(e)=>handleEnrollChange(e)} id="enrollCourseSelect">
        <option>Select Course</option>
          {courseData && courseData.map((data)=>{return <option key={data._id} value={data._id}>{data.courseName}</option>})}
        </select>

        <label>Enrollment Date</label>
        <input onChange={(e)=>handleDateChange(e)} id="enrollDate" type="date" />

        <button onClick={(e)=>{handleEnrollment(e)}} disabled={!selectedCourseId || !selectedStudentId || !enrollmentDate} id="enrollBtn" type="button">Enroll</button>
        <p id="enrollError" style={{ color: "red" }}>Enrollment errors</p>
      </form>

      <h3>Existing Enrollments</h3>
      <table id="enrollmentsTable">
        <thead>
          <tr><th>Student</th><th>Course</th><th>Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {enrolledData && enrolledData.map((data)=>{ return <tr key={data._id}>
            <td>{data.studentId.name}</td>
            <td>{data.courseId.courseName}</td>
            <td>{formatDate(data.enrolledOn)}</td>
            <td><button className="dropBtn">Drop</button></td>
          </tr>})}
        </tbody>
      </table>
    </div>
  );
}