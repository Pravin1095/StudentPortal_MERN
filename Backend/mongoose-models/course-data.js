const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      minlength: 3,
      match: /^[A-Za-z ]+$/,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    totalSeats: {
      type: Number,
      required: true,
      min: 5,
      max: 500,
    },

    seatsAvailable: {
      type: Number,
      required: true,
    },

    creditHours: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },
  },
  { timestamps: true }
);

module.exports =  mongoose.model("Course", CourseSchema);