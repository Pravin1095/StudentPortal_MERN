export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3 id="totalStudents">Total Students</h3>
          <p id="totalStudentsValue">-</p>
        </div>

        <div className="card">
          <h3 id="totalCourses">Total Courses</h3>
          <p id="totalCoursesValue">-</p>
        </div>

        <div className="card">
          <h3 id="upcomingBatch">Upcoming Batch</h3>
          <p id="upcomingBatchValue">-</p>
        </div>
      </div>
    </div>
  );
}