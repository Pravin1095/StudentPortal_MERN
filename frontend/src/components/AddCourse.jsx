import { useState } from "react";
import axios from "axios";

export default function AddCourse() {

  const [courseData, setCourseData] = useState({})

  const url = 'http://localhost:8000/api'

  const handleInputChange = (e)=>{
let {name, value} = e.target
if(name=="totalSeats" || name=='creditHours'){
  value = Number(value)
}
 setCourseData((prev)=>{
  return {
    ...prev,
    [name] : value
  }
 })
  }

  const handleFormSubmit =async(e)=>{
e.preventDefault()
const courseRes = await axios.post(`${url}/courses`,courseData)
alert(courseRes.data.message)

  }
  const checkEndDateValid = (s, e)=>{
const start = new Date(s)
const end = new Date(e)
if(end<start){
  return false
}
return true
  }

  const disableButton = ()=>{
    return !checkEndDateValid(courseData?.startDate, courseData?.endDate) || courseData?.courseName?.trim().length<3 || !(courseData?.totalSeats>5 && courseData?.totalSeats<=500) || !(courseData?.creditHours>0 && courseData?.creditHours<=6)
  }
  console.log("check courseDats", courseData)
  return (
    <div>
      <h2>Add Course</h2>

      <form onSubmit={(e)=>handleFormSubmit(e)} id="addCourseForm">
        <label>Course Name</label>
        <input onChange={(e)=>handleInputChange(e)} name="courseName" value={courseData?.courseName} id="courseNameInput" type="text" placeholder="Course name" />

        <label>Category</label>
        <input onChange={(e)=>handleInputChange(e)} name="category" value={courseData?.category} id="courseCategoryInput" type="text" placeholder="Category" />

        <label>Start Date</label>
        <input name="startDate" onChange={(e)=>handleInputChange(e)} id="courseStartInput" type="date" />

        <label>End Date</label>
        <input name="endDate" disabled={!courseData?.startDate} onChange={(e)=>handleInputChange(e)} id="courseEndInput" type="date" />

        <label>Total Seats</label>
        <input onChange={(e)=>handleInputChange(e)} name="totalSeats" value={courseData?.totalSeats} id="courseSeatsInput" type="number" />

        <label>Credit Hours</label>
        <input onChange={(e)=>handleInputChange(e)} name="creditHours" value={courseData?.creditHours} id="courseCreditsInput" type="number"/>

        <button disabled={disableButton()} id="submitCourseBtn" type="submit">Submit</button>
        <p id="courseFormError" style={{ color: "red" }}>{!checkEndDateValid(courseData?.startDate, courseData?.endDate) && "End Date should be after the start date"}</p>
        <p id="courseNameError" style={{ color: "red" }}>{courseData?.courseName?.trim().length<3 && "Course Name should be greater than 3 characters"}</p>
        <p id="courseTotalSeatsError" style={{ color: "red" }}>{(!(courseData?.totalSeats>5 && courseData?.totalSeats<=500)) && "Total seats should be between 5 and 500"}</p>
        <p id="coursecreditHoursError" style={{ color: "red" }}>{(!(courseData?.creditHours>0 && courseData?.creditHours<=6)) && "Credit Hours should be between 1 and 6"}</p>
      </form>
    </div>
  );
}