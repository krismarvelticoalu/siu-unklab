const express = require("express");
const {
  getAllEnrollments,
  getEnrollmentById,
  deleteEnrollmentById,
  deleteAllEnrollments,
  addEnrollment,
  updateEnrollmentById,
} = require("./enrollment.service");
const { addAttendance } = require("../attendance/attendance.service");

const router = express.Router();

// get all enrollments
router.get("/", async (req, res) => {
  try {
    const result = await getAllEnrollments();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert an enrollment
router.post("/", async (req, res) => {
  const {
    studentId,
    courseId,
    teacherId,
    semester,
    grade,
    location,
    timePeriod,
    day,
  } = req.body;
  try {
    await addEnrollment(
      parseInt(studentId),
      parseInt(courseId),
      parseInt(teacherId),
      semester,
      parseInt(grade),
      location,
      timePeriod,
      day
    );

    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get enrollment by id
router.get("/:studentId/:courseId", async (req, res) => {
  try {
    const result = await getEnrollmentById(
      parseInt(req.params.studentId),
      parseInt(req.params.courseId)
    );

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete enrollment by id
router.delete("/:studentId/:courseId", async (req, res) => {
  try {
    await deleteEnrollmentById(
      parseInt(req.params.studentId),
      parseInt(req.params.courseId)
    );

    res.status(200).json({
      status: "success",
      message: "data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete all enrolmments
router.delete("/", async (req, res) => {
  try {
    await deleteAllEnrollments();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update enrollment by id
router.patch("/:studentId/:courseId", async (req, res) => {
  const {
    studentId,
    courseId,
    teacherId,
    semester,
    grade,
    location,
    timePeriod,
    day,
  } = req.body;

  try {
    await updateEnrollmentById(
      parseInt(req.params.studentId),
      parseInt(req.params.courseId),
      parseInt(studentId),
      parseInt(courseId),
      parseInt(teacherId),
      semester,
      parseInt(grade),
      location,
      timePeriod,
      day
    );

    res.status(200).json({
      status: "success",
      message: "data berhasil diperbarui",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
