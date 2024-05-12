const express = require("express");
const db = require("../../db");
const prisma = require("../db");

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const result = await prisma.user.findMany();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert a user
router.post("/", async (req, res) => {
  const { username, passwordHash, type } = req.body;
  try {
    await prisma.user.create({
      data: {
        studentId: parseInt(studentId),
        courseId: parseInt(courseId),
        teacherId: parseInt(teacherId),
        semester: semester,
        grade: parseInt(grade),
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

// get user by id
router.get("/:studentId/:courseId", async (req, res) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        studentId_courseId: {
          studentId: parseInt(req.params.studentId),
          courseId: parseInt(req.params.courseId),
        },
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

// delete user by id
router.delete("/:studentId/:courseId", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        studentId_courseId: {
          studentId: parseInt(req.params.studentId),
          courseId: parseInt(req.params.courseId),
        },
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

// delete all users
router.delete("/", async (req, res) => {
  try {
    await prisma.user.deleteMany();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update user by id
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
    await prisma.user.update({
      where: {
        studentId_courseId: {
          studentId: parseInt(req.params.studentId),
          courseId: parseInt(req.params.courseId),
        },
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
