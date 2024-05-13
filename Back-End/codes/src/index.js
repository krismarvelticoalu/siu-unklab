const express = require("express");
const app = express();
const port = 3000;
const db = require("../db");

// // middleware untuk menangani request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const courseController = require("./course/course.controller");
const teacherController = require("./teacher/teacher.controller");
const studentController = require("./student/student.controller");
const enrollmentController = require("./enrollment/enrollment.controller");
const attendanceController = require("./attendance/attendance.controller");

app.use("/courses", courseController);
app.use("/teachers", teacherController);
app.use("/students", studentController);
app.use("/enrollments", enrollmentController);
app.use("/attendances", attendanceController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
