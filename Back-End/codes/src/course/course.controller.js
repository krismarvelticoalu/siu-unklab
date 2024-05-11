const express = require("express");
const db = require("../../db");
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
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert a course
router.post("/", async (req, res) => {
  const { id_mk, nama_mk, ruangan, paralel, id_dosen } = req.body;
  try {
    await addCourse(id_mk, nama_mk, ruangan, paralel, id_dosen);

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
    const result = await getCourseById(req.params.id);

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
    await deleteCourseById(req.params.id);

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
      message: "data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
