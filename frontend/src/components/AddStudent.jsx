export default function AddStudent() {
  return (
    <div>
      <h2>Add Student</h2>

      <form id="addStudentForm">
        <label>Full Name</label>
        <input id="nameInput" type="text" placeholder="Enter full name" />

        <label>Email</label>
        <input id="emailInput" type="email" placeholder="Enter email" />

        <label>Date of Birth</label>
        <input id="dobInput" type="date" />

        <label>Gender</label>
        <select id="genderSelect">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Phone</label>
        <input id="phoneInput" type="tel" placeholder="10-digit phone" />

        <label>Address</label>
        <textarea id="addressInput" placeholder="Street, City, Pincode"></textarea>

        <label>Status</label>
        <select id="statusSelect">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>Admission Date</label>
        <input id="admissionDateInput" type="date" />

        <button id="submitStudentBtn" type="submit">Submit</button>
        <p id="formError" style={{ color: "red" }}>Validation errors will show here</p>
      </form>
    </div>
  );
}