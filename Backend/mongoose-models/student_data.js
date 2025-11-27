const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      match: /^[A-Za-z ]+$/,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    dob: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },

    address: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
      enum: ["CSE", "IT", "ECE", "MECH", "CIVIL"],
    },

    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
    },

    admissionDate: {
      type: Date,
      required: true,
    },

    totalClasses: {
      type: Number,
      default: 0,
      min: 0,
    },

    attendedClasses: {
      type: Number,
      default: 0,
      min: 0,
    },

    marks: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
