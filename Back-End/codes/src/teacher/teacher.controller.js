const express = require("express");
const {
  getAllTeachers,
  getTeacherById,
  deleteTeacherById,
  deleteAllTeachers,
  addTeacher,
  updateTeacherById,
} = require("./teacher.service");

const router = express.Router();

// get all teachers
router.get("/", async (req, res) => {
  try {
    const result = await getAllTeachers();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert a teacher
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await addTeacher(name, email, password);

    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get teacher by id
router.get("/:id", async (req, res) => {
  try {
    const result = await getTeacherById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete teacher by id
router.delete("/:id", async (req, res) => {
  try {
    await deleteTeacherById(parseInt(req.params.id));

    res.status(200).json({
      status: "success",
      message: "data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete all teachers
router.delete("/", async (req, res) => {
  try {
    await deleteAllTeachers();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update teacher by id
router.patch("/:id", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await updateTeacherById(parseInt(req.params.id), name, email, password);

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
