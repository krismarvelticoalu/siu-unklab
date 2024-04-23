const express = require("express");
const app = express();
const port = 3000;
const db = require("../db");

// // middleware untuk menangani request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/courses", async (req, res) => {
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

app.post("/courses", async (req, res) => {
  const { id_mk, nama_mk, ruangan, paralel } = req.body;
  try {
    const result = await db.query(
      `INSERT into mata_kuliah (id_mk, nama_mk, ruangan, paralel) values ('${id_mk}', '${nama_mk}', '${ruangan}', '${paralel}')`
    );
    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
