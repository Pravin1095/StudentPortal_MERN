import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate, calculateAge} from "../common/helper";

export default function StudentProfile() {


  const url = 'http://localhost:8000/api'
  const {id} = useParams()
  const [studentData, setStudentData] = useState({})
  const [attendanceData, setAttendanceData] = useState({
  })
  const [marksData, setMarksData] = useState({})

  useEffect(()=>{
    handleGetStudentData()
  },[])

  const handleGetStudentData = async()=>{
    
   try{
const stuData = await axios.get(`${url}/students/get/${id}`)
setStudentData((prev)=>{
  return {
    ...prev,
    ...stuData.data
  }
})
  }
  catch(err){

  }
    }

    const handleInputChange = (e)=>{
      const {name, value} = e.target
       console.log("check atte", attendanceData)
       
      if(name==='totalClasses' || name==='attendedClasses'){
        const numValue = Number(value)
        if(name==='attendedClasses' && numValue>attendanceData.totalClasses){
          setAttendanceData((prev)=>{
          return{
            ...prev,
            [name]  : attendanceData.totalClasses
          }
        })
        return
        }
        setAttendanceData((prev)=>{
          return{
            ...prev,
            [name]  : Number(value)
          }
        })
      }
      else{
        setMarksData((prev)=>{
          return{
            ...prev,
            [name] : value
          }
        })
      }
    }

    const handleSubmit = async(b)=>{
if(b==='attendance'){
try{
   const res = await axios.patch(`${url}/students/add/${id}`,attendanceData)
   alert(res.data.message)
}
catch(err){

}
setAttendanceData({
  totalClasses : '',
  attendedClasses: ''
})
}
else{
  try{
   const res = await axios.patch(`${url}/students/add/${id}`,marksData)
   alert(res.data.message)
}
catch(err){

}
setMarksData({
  subject: '',
  score : ''
})
}

handleGetStudentData()
     
    }

    const calculateAttendance= ()=>{
      const percent = (studentData.attendedClasses/studentData.totalClasses)*100
      return percent.toFixed(2)
    }
 
  return (
    <div>
      <h2>Student Profile</h2>

      <section id="studentDetails">
        <p><strong>Name:</strong> <span id="profileName">-</span><strong>{studentData.name}</strong></p>
        <p><strong>Email:</strong> <span id="profileEmail">-</span><strong>{studentData.email}</strong></p>
        <p><strong>DOB:</strong> <span id="profileDob">-</span><strong>{formatDate(studentData.dob)}</strong></p>
        <p><strong>Age:</strong> <span id="profileAge">-</span><strong>{calculateAge(studentData.dob)}</strong></p>
        <p><strong>Department:</strong> <span id="profileDept">-</span><strong>{studentData.department}</strong></p>
        <p><strong>Admission Date:</strong> <span id="profileAdmission">-</span><strong>{formatDate(studentData.admissionDate)}</strong></p>
      </section>

      <section id="subjectsSection">
        <h3>Subjects</h3>
        <ul id="subjectsList">
        {
         studentData && studentData.marks && Object.entries(studentData.marks).map(([subject, score])=>{
          return <li>{subject}<span> - </span><span className="marks">{score}</span></li>
         }) 
        }
        </ul>
        <div>
          <input onChange={(e)=>handleInputChange(e)} value={marksData.subject} name='subject' id="subjectNameInput" type="text" placeholder="Subject name" />
          <input onChange={(e)=>handleInputChange(e)} value={marksData.score} name='score'  id="subjectMarksInput" type="number" placeholder="Marks (0-100)" />
          <button onClick={()=>{handleSubmit('marks')}} disabled={!marksData.subject || !marksData.score} id="addSubjectBtn" type="button">Add / Update Subject</button>
        </div>
      </section>

      <section id="attendanceSection">
        <h3>Attendance</h3>
        {/* <label>Select month</label>
        <input id="attendanceMonth" type="month" />
        <button id="filterAttendanceBtn" type="button">Filter</button>

        <table id="attendanceTable">
          <thead>
            <tr><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>2024-11-01</td><td>PRESENT</td></tr>
          </tbody>
        </table> */}
        <label>Total Class</label>
        <input value={attendanceData.totalClasses} onChange={(e)=>handleInputChange(e)} type='number' name='totalClasses' />

        <label>Attended Class</label>
        <input 
        // max={attendanceData.totalClasses}
         value={attendanceData.attendedClasses} disabled={!attendanceData.totalClasses} onChange={(e)=>handleInputChange(e)} type='number' name='attendedClasses' />

        <button onClick={()=>handleSubmit('attendance')} disabled={!attendanceData.totalClasses || !attendanceData.attendedClasses} type='button'>Submit</button>

        <p>Attendance %: <span id="attendancePercent">- </span><strong>{calculateAttendance()}</strong></p>
      </section>

      <button id="deleteStudentBtn">Delete Student</button>
    </div>
  );
}