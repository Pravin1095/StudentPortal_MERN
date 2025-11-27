import { useState, useEffect } from "react";
import { formatDate } from "../common/helper";
import axios from 'axios';

export default function StudentList() {


  const url = 'http://localhost:8000/api'
  const [studentData, setStudentData] = useState([])

  useEffect(()=>{
handleGetData()
  },[])

  const handleGetData = async()=>{
    try{
 const res = await axios.get(`${url}/students/get`)
      console.log("check res", res)
      setStudentData(res.data)
    }
    catch(err){
      console.log("check frontend get", err)
    }
     
  }

//   const formatDate = (d)=>{
// console.log("check d", new Date(d))
// const dObj = new Date(d)
// const y = dObj.getFullYear()
// const m = dObj.getMonth()
// const dd = dObj.getDate()
// return `${y}-${m}-${dd}`
//   }

  const calculateAge = (d)=>{
const now = new Date()
const curYear = now.getFullYear()
const birthYear = new Date(d).getFullYear()
return curYear-birthYear
  }
  return (
    <div>
      <h2>Student List</h2>

      <div className="controls">
        <input id="searchInput" type="text" placeholder="Search by name" />
        <select id="statusFilter">
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button id="addStudentBtn">Add Student</button>
      </div>

      <table id="studentsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* rows to be rendered dynamically */}
          {studentData ? studentData.map((data)=>{ return <tr key={data._id} className="studentRow">
            <td className="studentName">{data.name}</td>
            <td className="studentEmail">{data.email}</td>
            <td className="studentDob">{formatDate(data.dob)}</td>
            <td className="studentAge">{calculateAge(data.dob)}</td>
            <td className="studentStatus">{data.status}</td>
            <td>
              <button className="viewBtn">View</button>
              <button className="editBtn">Edit</button>
              <button className="deleteBtn">Delete</button>
            </td>
          </tr>}) : <p id="loading">Loading...</p> }
        </tbody>
      </table>

      
      <p id="error" style={{ color: "red" }}>Error message placeholder</p>
    </div>
  );
}