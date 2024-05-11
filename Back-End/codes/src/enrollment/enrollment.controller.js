const express = require("express");
const db = require("../../db");
const prisma = require("../db");

const router = express.Router();

// get all enrollments
router.get("/", async (req, res) => {
  try {
    const result = await prisma.enrollment.findMany();

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
    await prisma.enrollment.create({
      data: {
        studentId: studentId,
        courseId: courseId,
        teacherId: teacherId,
        semester: semester,
        grade: grade,
        location: location,
        timePeriod: timePeriod,
        day: day,
      },
    });

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
router.get("/:id", async (req, res) => {
  try {
    const result = await prisma.enrollment.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

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
router.delete("/:id", async (req, res) => {
  try {
    await prisma.enrollment.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });

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
    await prisma.enrollment.deleteMany();

    // Reset the sequence back to 1 after deleting all courses
    const tableName = "enrollment"; // replace with your table name
    const columnName = "id"; // replace with your column name
    await prisma.$executeRawUnsafe(
      `SELECT setval(pg_get_serial_sequence('${tableName}', '${columnName}'), 1, false);`
    );

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
router.patch("/:id", async (req, res) => {
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

  // only update provided fields in req.body. if not provided, don't update the field.
  let data = {};
  if (studentId !== "") data.studentId = parseInt(studentId);
  if (courseId !== "") data.courseId = parseInt(courseId);
  if (teacherId !== "") data.teacherId = parseInt(teacherId);
  if (semester !== "") data.semester = semester;
  if (grade !== "") data.grade = parseInt(grade);
  if (location !== "") data.location = location;
  if (timePeriod !== "") data.timePeriod = timePeriod;
  if (day !== "") data.day = day;

  try {
    await prisma.enrollment.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: data,
    });

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
