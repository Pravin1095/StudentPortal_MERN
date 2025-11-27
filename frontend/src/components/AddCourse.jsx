export default function AddCourse() {
  return (
    <div>
      <h2>Add Course</h2>

      <form id="addCourseForm">
        <label>Course Name</label>
        <input id="courseNameInput" type="text" placeholder="Course name" />

        <label>Category</label>
        <input id="courseCategoryInput" type="text" placeholder="Category" />

        <label>Start Date</label>
        <input id="courseStartInput" type="date" />

        <label>End Date</label>
        <input id="courseEndInput" type="date" />

        <label>Total Seats</label>
        <input id="courseSeatsInput" type="number" min="5" max="500" />

        <label>Credit Hours</label>
        <input id="courseCreditsInput" type="number" min="1" max="6" />

        <button id="submitCourseBtn" type="submit">Submit</button>
        <p id="courseFormError" style={{ color: "red" }}>Validation errors</p>
      </form>
    </div>
  );
}