const express = require("express");
const db = require("../../db");

const router = express.Router();

// get all students
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM mahasiswa");

    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
