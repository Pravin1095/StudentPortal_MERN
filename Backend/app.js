// const url = 'mongodb+srv://pravin1095:resumeAnalyzer@cluster0.3dpr3py.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose=require('mongoose')
const Student = require('./mongoose-models/student_data')
const Course = require('./mongoose-models/course-data')
// const taskRouter=require('./routes/taskRouter')
// const authRouter = require('./routes/authRouter')

const studentsRouter = require('./routes/student-router')
const coursesRouter = require('./routes/courses-router')
const enrollRouter = require('./routes/enroll-router')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()

// app.use(cors({
//   origin: "https://task-creator-opal.vercel.app",  // your Vercel frontend
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   credentials: true
// }));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
    next()
})

// app.use('/api/tasks', taskRouter)
// app.use('/api/users', authRouter)

app.use('/api/students', studentsRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/enroll', enrollRouter)


const insertStudent = async ()=>{
    if(await Student.countDocuments()===0){

await Student.insertMany([
  {
    "name": "Ishita Ghosh",
    "email": "ishita.ghosh@example.com",
    "dob": "2000-01-18",
    "gender": "Female",
    "phone": "9700123456",
    "address": "Salt Lake, Kolkata, 700106",
    "department": "CSE",
    "status": "Active",
    "admissionDate": "2023-08-15",
    "totalClasses": 52,
    "attendedClasses": 50,
    "marks": {
      "Java": 89,
      "Python": 95
    }
  },
  {
    "name": "Naveen Kumar",
    "email": "naveen.kumar@example.com",
    "dob": "1998-04-05",
    "gender": "Male",
    "phone": "9078563412",
    "address": "Jubilee Hills, Hyderabad, 500033",
    "department": "MECH",
    "status": "Active",
    "admissionDate": "2022-06-10",
    "totalClasses": 60,
    "attendedClasses": 55,
    "marks": {
      "Thermodynamics": 82,
      "Fluid Mechanics": 77
    }
  },
  {
    "name": "Ritika Das",
    "email": "ritika.das@example.com",
    "dob": "1999-02-09",
    "gender": "Female",
    "phone": "9012345678",
    "address": "Borra Colony, Vizag, 531173",
    "department": "CIVIL",
    "status": "Inactive",
    "admissionDate": "2021-07-20",
    "totalClasses": 58,
    "attendedClasses": 41,
    "marks": {
      "Structural Engg": 71,
      "Surveying": 68
    }
  }
]
)
    }
    else{
        return
    }
}

const insertCourse = async ()=>{
    if(await Course.countDocuments()===0){
await Course.insertMany([
  {
    "courseName": "Machine Learning",
    "category": "Programming",
    "description": "Supervised and unsupervised learning",
    "startDate": "2025-04-01",
    "endDate": "2025-05-10",
    "totalSeats": 120,
    "seatsAvailable": 100,
    "creditHours": 5
  },
  {
    "courseName": "Cyber Security Basics",
    "category": "Security",
    "description": "Entry-level cybersecurity concepts",
    "startDate": "2025-01-20",
    "endDate": "2025-02-20",
    "totalSeats": 75,
    "seatsAvailable": 55,
    "creditHours": 3
  },
  {
    "courseName": "Digital Marketing",
    "category": "Marketing",
    "description": "SEO, SEM, SMM fundamentals",
    "startDate": "2025-02-15",
    "endDate": "2025-03-18",
    "totalSeats": 50,
    "seatsAvailable": 40,
    "creditHours": 2
  }
]
)
    }
    else{
        return
    }
}

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connection successful")
    app.listen(process.env.PORT  || 8000)
    insertStudent()
    insertCourse()
}).catch(err=>{
    console.log('Mongoose connect err', err)
})
