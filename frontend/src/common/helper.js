export const formatDate = (d)=>{
const dObj = new Date(d)
const y = dObj.getFullYear()
const m = String(dObj.getMonth()+1).padStart(2,"0")
const dd = String(dObj.getDate()).padStart(2, "0")
return `${y}-${m}-${dd}`
  }

   export const calculateAge = (d)=>{
const now = new Date()
const curYear = now.getFullYear()
const birthYear = new Date(d).getFullYear()
return curYear-birthYear
  }

  export const checkIsFuture = (d)=>{
const enteredDate = new Date(d)
const now = new Date()
if(enteredDate-now>0){
  return true
}
return false
  }