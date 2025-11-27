export const formatDate = (d)=>{
console.log("check d", new Date(d))
const dObj = new Date(d)
const y = dObj.getFullYear()
const m = dObj.getMonth()
const dd = dObj.getDate()
return `${y}-${m}-${dd}`
  }