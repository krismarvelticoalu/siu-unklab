const express = require("express");
const db = require("../../db");

const router = express.Router();

// get all courses
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM mata_kuliah");
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
  const { id_mk, nama_mk, ruangan, paralel } = req.body;
  try {
    const result = await db.query(
      `INSERT into mata_kuliah (id_mk, nama_mk, ruangan, paralel) values ('${id_mk}', '${nama_mk}', '${ruangan}', '${paralel}')`
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

// get course by id
router.get("/:id", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM mata_kuliah WHERE id_mk = '${req.params.id}'`
    );
    res.status(200).json({
      status: "success",
      message: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// delete course by id
router.delete("/:id", async (req, res) => {
  try {
    const course = await db.query(
      `DELETE FROM mata_kuliah WHERE id_mk = '${req.params.id}'`
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

// delete all courses
router.delete("/", async (req, res) => {
  try {
    const course = await db.query(`DELETE FROM mata_kuliah`);
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
