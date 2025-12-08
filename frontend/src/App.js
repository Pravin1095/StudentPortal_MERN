import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentProfile from './components/StudentProfile';
import CoursesList from './components/CoursesList';
import AddCourse from './components/AddCourse';
import Enrollments from './components/Enrollments';
import { NavLayout } from './App-styled.styles';
import CourseProfile from './components/CourseProfile';
export default function App() {

  const routes = [{path : '/dashboard',element:<Dashboard />, text:'Dashboard'},
    {path : '/students', element: <StudentList />, text:'StudentList'},
     {path : '/students/add', element: <AddStudent />,text:'Add Student'} ,{path : '/students/add/:studentId', element: <AddStudent />},{path : '/students/:id',element: <StudentProfile />,text:''},{path : '/courses',element: <CoursesList />, text:'Courses List'}, {path : '/courses/:courseId',element: <CourseProfile />, text:''},
     {path : '/courses/add',element: <AddCourse />, text:'Add Course'},{path : '/enrollments',element: <Enrollments />, text:'Enrollments'}]


  return (
    <div>
    <Router>
      <header>
        <h1>Student Academic Portal</h1>
        <nav>
        {routes.map((data)=>{
          return <NavLayout><NavLink to={data.path}>
{data.text}
          </NavLink></NavLayout>
        })}
          {/* Add navigation links here */}
        </nav>
      </header>

      <main>
      <Routes>
{routes.map((data)=>{
return <Route path={data.path} element={data.element} />
})}
      </Routes>
        {/* Routes to be configured:
            /dashboard
            /students
            /students/add
            /students/:id
            /courses
            /courses/add
            /enrollments
        */}
        <section>
          <p>Implement routing to render the page components here.</p>
        </section>
      </main>
      </Router>
    </div>
  );
}