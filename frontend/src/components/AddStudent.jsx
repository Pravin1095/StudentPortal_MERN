import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";
import { formatDate, calculateAge, checkIsFuture } from "../common/helper";

export default function AddStudent() {

  const [formData, setFormData] = useState({
    department : 'CSE',
    status : 'Active'
  })



  const url = 'http://localhost:8000/api'

  const {studentId} = useParams()

  const getEditDataVal = async()=>{
 try{
const editStuData = await axios.get(`${url}/students/get/${studentId}`)
setFormData((prev)=>{
  return {
    ...prev,
    ...editStuData.data
  }
})
  }
  catch(err){

  }
  }
  useEffect(()=>{
if(studentId){
 getEditDataVal()
}
  },[])

  const handleChangeForm = (e)=>{
const {name, value} = e.target
setFormData((prev)=>{
  return {
  ...prev,
[name] : value}
})
console.log("check form", formData)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
console.log("hi submit", formData)
try{
  if(studentId){
const res = await axios.patch(`${url}/students/add/${studentId}`,formData)
alert(res.data.message)
  }
  else{
const res = await axios.post(`${url}/students/add`, formData)
alert(res.data.message)
  }
}
catch(err){
console.log("check post err student",err)
}
  }

  const isDisabled = ()=>{
    return formData?.name?.trim().length<3 || calculateAge(formData?.dob)<18 || checkIsFuture(formData?.admissionDate)
  }
  console.log("check dob", formData.dob)
  return (
    <div>
      <h2>{studentId ? 'Edit Student' : 'Add Student'}</h2>

      <form onSubmit={(e)=>handleSubmit(e)} id="addStudentForm">
        <label>Full Name</label>
        <input value={formData.name} required onChange={(e)=>{handleChangeForm(e)}} name='name' id="nameInput" type="text" placeholder="Enter full name" />

        <label>Email</label>
        <input value={formData.email} required onChange={(e)=>{handleChangeForm(e)}} name='email' id="emailInput" type="email" placeholder="Enter email" />

        <label>Date of Birth</label>
        <input value={formatDate(formData.dob)} required onChange={(e)=>{handleChangeForm(e)}} name='dob' id="dobInput" type="date" />

        <label>Gender</label>
        <select required onChange={(e)=>{handleChangeForm(e)}} name='gender' id="genderSelect">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Phone</label>
        <input value={formData.phone} required onChange={(e)=>{handleChangeForm(e)}} maxlength='10' name='phone' id="phoneInput" type="tel" placeholder="10-digit phone" />

        <label>Address</label>
        <textarea value={formData.address} required onChange={(e)=>{handleChangeForm(e)}} name='address' id="addressInput" placeholder="Street, City, Pincode"></textarea>

{/* "CSE", "IT", "ECE", "MECH", "CIVIL" */}
<label>Department</label>
        <select value={formData.department} required onChange={(e)=>{handleChangeForm(e)}} name='department' id="departmentSelect">
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>


        <label>Status</label>
        <select value={formData.status} required onChange={(e)=>{handleChangeForm(e)}} name='status' id="statusSelect">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>Admission Date</label>
        <input value={formatDate(formData.admissionDate)}  required onChange={(e)=>{handleChangeForm(e)}} name='admissionDate' id="admissionDateInput" type="date" />

        <button disabled={isDisabled()} id="submitStudentBtn" type="submit">Submit</button>
        <p id="formErrorName" style={{ color: "red" }}>{formData?.name?.trim().length<3 && "Name should be more than 3 characters"}</p>
        <p id="formErrorDob" style={{ color: "red" }}>{calculateAge(formData?.dob)<18 && "Age should be greater than or equal to 18"}</p>
        <p id="formErrorAdmDate" style={{ color: "red" }}>{checkIsFuture(formData?.admissionDate) && "Admission Date cannot be future date"}</p>
      </form>
    </div>
  );
}