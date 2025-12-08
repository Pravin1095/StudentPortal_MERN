import React from "react";

/**
 * CourseProfile.jsx
 * Course details + enrolled students list.
 * THIS FILE CONTAINS NO LOGIC — only JSX placeholders and element IDs.
 *
 * Implement:
 *  - fetch course data by ID
 *  - fetch enrolled students for the course
 *  - handle Edit / Delete / Enroll actions
 *  - compute duration: difference between startDate and endDate
 *  - disable Enroll button if seatsAvailable === 0 or course ended
 */

export default function CourseProfile() {
  return (
    <div>
      <h2 id="pageTitle">Course Details</h2>

      {/* Course basic info */}
      <section id="courseInfo">
        <h3 id="courseName">Course Title - Placeholder</h3>

        <div>
          <p>
            <strong>Category:</strong> <span id="courseCategory">-</span>
          </p>
          <p>
            <strong>Credits:</strong> <span id="courseCredits">-</span>
          </p>
          <p>
            <strong>Start Date:</strong> <span id="courseStart">-</span>
          </p>
          <p>
            <strong>End Date:</strong> <span id="courseEnd">-</span>
          </p>
          <p>
            <strong>Duration:</strong> <span id="courseDuration">-</span> days
          </p>
          <p>
            <strong>Seats:</strong>{" "}
            <span id="seatsInfo">seatsAvailable / totalSeats</span>
          </p>
          <p>
            <strong>Description:</strong>
          </p>
          <p id="courseDescription">Course description goes here...</p>
        </div>
      </section>

      {/* Actions */}
      <section id="courseActions" style={{ marginTop: "16px" }}>
        <button id="editCourseBtn">Edit Course</button>
        <button id="deleteCourseBtn">Delete Course</button>

        {/* Enroll UI: could open modal / redirect to enroll page */}
        <div style={{ display: "inline-block", marginLeft: "12px" }}>
          <label htmlFor="enrollStudentSelect">Enroll Student:</label>
          <select id="enrollStudentSelect">
            <option value="">Select student</option>
            {/* options should be populated dynamically */}
          </select>
          <button id="enrollBtn" type="button">Enroll</button>
        </div>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* Enrolled students list */}
      <section id="enrolledStudentsSection">
        <h3>Enrolled Students</h3>

        <table id="enrolledStudentsTable">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Enrolled On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows populated dynamically */}
            <tr className="enrolledRow">
              <td className="enrolledName">Sample Student</td>
              <td className="enrolledEmail">sample@mail.com</td>
              <td className="enrolledOn">2025-01-22</td>
              <td>
                <button className="viewStudentBtn">View</button>
                <button className="dropStudentBtn">Drop</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p id="enrolledEmptyMessage">No students enrolled yet.</p>
        <p id="enrolledLoading">Loading...</p>
        <p id="enrolledError" style={{ color: "red" }}>Error loading enrolled students</p>
      </section>

      {/* Optional: course statistics */}
      <section id="courseStats" style={{ marginTop: "20px" }}>
        <h4>Course Statistics</h4>
        <p>
          <strong>Average Marks:</strong> <span id="averageMarks">-</span>
        </p>
        <p>
          <strong>Attendance Avg (%):</strong> <span id="attendanceAvg">-</span>
        </p>
      </section>
    </div>
  );
}
