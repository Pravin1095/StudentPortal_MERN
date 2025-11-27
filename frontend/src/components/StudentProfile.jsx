export default function StudentProfile() {
  return (
    <div>
      <h2>Student Profile</h2>

      <section id="studentDetails">
        <p><strong>Name:</strong> <span id="profileName">-</span></p>
        <p><strong>Email:</strong> <span id="profileEmail">-</span></p>
        <p><strong>DOB:</strong> <span id="profileDob">-</span></p>
        <p><strong>Age:</strong> <span id="profileAge">-</span></p>
        <p><strong>Department:</strong> <span id="profileDept">-</span></p>
        <p><strong>Admission Date:</strong> <span id="profileAdmission">-</span></p>
      </section>

      <section id="subjectsSection">
        <h3>Subjects</h3>
        <ul id="subjectsList">
          <li>Subject A - <span className="marks">85</span></li>
        </ul>
        <div>
          <input id="subjectNameInput" type="text" placeholder="Subject name" />
          <input id="subjectMarksInput" type="number" placeholder="Marks (0-100)" />
          <button id="addSubjectBtn" type="button">Add / Update Subject</button>
        </div>
      </section>

      <section id="attendanceSection">
        <h3>Attendance</h3>
        <label>Select month</label>
        <input id="attendanceMonth" type="month" />
        <button id="filterAttendanceBtn" type="button">Filter</button>

        <table id="attendanceTable">
          <thead>
            <tr><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>2024-11-01</td><td>PRESENT</td></tr>
          </tbody>
        </table>

        <p>Attendance %: <span id="attendancePercent">-</span></p>
      </section>

      <button id="deleteStudentBtn">Delete Student</button>
    </div>
  );
}