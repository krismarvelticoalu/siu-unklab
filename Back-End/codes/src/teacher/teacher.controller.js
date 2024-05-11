const express = require("express");
const db = require("../../db");
const prisma = require("../db");

const router = express.Router();

// get all teachers
router.get("/", async (req, res) => {
  try {
    const result = await prisma.teacher.findMany();

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
  const { name } = req.body;
  try {
    await prisma.teacher.create({
      data: { name: name },
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

// get teacher by id
router.get("/:id", async (req, res) => {
  try {
    const result = await prisma.teacher.findUnique({
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

// delete teacher by id
router.delete("/:id", async (req, res) => {
  try {
    await prisma.teacher.delete({
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

// delete all teachers
router.delete("/", async (req, res) => {
  try {
    await prisma.teacher.deleteMany();

    // Reset the sequence back to 1 after deleting all courses
    const tableName = "teacher"; // replace with your table name
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

// update teacher by id
router.patch("/:id", async (req, res) => {
  const { name } = req.body;
  try {
    await prisma.teacher.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: name,
      },
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
