const express = require("express");
const {
  getAllStudents,
  addStudent,
  getStudentById,
  deleteStudentById,
  deleteAllStudents,
  updateStudentById,
} = require("./student.service");

const router = express.Router();

// get all students
router.get("/", async (req, res) => {
  try {
    const result = await getAllStudents();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert a student
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await addStudent(name, email, password);

    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get student by id
router.get("/:id", async (req, res) => {
  try {
    const result = await getStudentById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete student by id
router.delete("/:id", async (req, res) => {
  try {
    await deleteStudentById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      message: "data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete all students
router.delete("/", async (req, res) => {
  try {
    await deleteAllStudents();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update student by id
router.patch("/:id", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await updateStudentById(parseInt(req.params.id), name, email, password);

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
