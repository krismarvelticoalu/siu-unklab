const express = require("express");
const db = require("../../db");
const prisma = require("../db");
const {
  getAllCourses,
  addCourse,
  getCourseById,
  deleteCourseById,
  deleteAllCourses,
} = require("./course.service");

const router = express.Router();

// get all courses
router.get("/", async (req, res) => {
  try {
    const result = await getAllCourses();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert a course
router.post("/", async (req, res) => {
  const { title, credit } = req.body;
  try {
    await addCourse(title, parseInt(credit));

    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get course by id
router.get("/:id", async (req, res) => {
  try {
    const result = await getCourseById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete course by id
router.delete("/:id", async (req, res) => {
  try {
    await deleteCourseById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      message: "data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete all courses
router.delete("/", async (req, res) => {
  try {
    await deleteAllCourses();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update course by id
router.patch("/:id", async (req, res) => {
  const { title, credit } = req.body;

  // only update provided fields in req.body. if not provided, don't update the field.
  let data = {};
  if (title !== "") data.title = title;
  if (credit !== "") data.credit = parseInt(credit);

  try {
    await prisma.course.update({
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
