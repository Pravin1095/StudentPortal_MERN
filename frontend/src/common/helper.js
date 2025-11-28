export const formatDate = (d)=>{
console.log("check d", new Date(d))
const dObj = new Date(d)
const y = dObj.getFullYear()
const m = String(dObj.getMonth()+1).padStart(2,"0")
const dd = String(dObj.getDate()).padStart(2, "0")
return `${y}-${m}-${dd}`
  }