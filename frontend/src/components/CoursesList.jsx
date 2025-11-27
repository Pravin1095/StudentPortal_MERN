import { useState, useEffect } from "react";
import axios from 'axios'
import { formatDate } from "../common/helper";

export default function CoursesList() {

  const [courseData, setCourseData] = useState([])
  const url = 'http://localhost:8000/api'


  const handleGetCourse = async()=>{
const res = await axios.get(`${url}/courses/get`)
setCourseData(res.data)
  }

  useEffect(()=>{
    handleGetCourse()
  },[])

//   const formatDate = (d)=>{
// const date = new Date(d)
// const y= date.getFullYear()
// const m = date.getMonth()
// const da= date.getDate()
// return `${y}-${m}-${da}`
//   }

  const calculateCourseDuration = (start, end)=>{
const startDate = new Date(start)
const endDate = new Date(end)
const courseDuration = (endDate - startDate)/(1000*60*60*24)
return courseDuration
  }
  return (
    <div>
      <h2>Courses List</h2>

      <div className="controls">
        <button id="addCourseBtn">Add Course</button>
        <select id="categoryFilter">
          <option value="">All Categories</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Cyber Security Basics">Cyber Security Basics</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
      </div>

      <table id="coursesTable">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Category</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration (days)</th>
            <th>Seats Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseData ? courseData.map((data)=>{return <tr key={data._id} className="courseRow">
            <td className="courseName">{data.courseName}</td>
            <td className="courseCategory">{data.category}</td>
            <td className="courseStart">{formatDate(data.startDate)}</td>
            <td className="courseEnd">{formatDate(data.endDate)}</td>
            <td className="courseDuration">{calculateCourseDuration(data.startDate, data.endDate)}</td>
            <td className="courseSeats">{data.seatsAvailable}</td>
            <td>
              <button className="viewCourseBtn">View</button>
              <button className="editCourseBtn">Edit</button>
              <button className="deleteCourseBtn">Delete</button>
              <button className="enrollCourseBtn">Enroll</button>
            </td>
          </tr>}) : <p id="coursesLoading">Loading...</p>}
        </tbody>
      </table>

      
      <p id="coursesError" style={{ color: "red" }}>Error placeholder</p>
    </div>
  );
}