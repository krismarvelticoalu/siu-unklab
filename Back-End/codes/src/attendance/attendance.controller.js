const express = require("express");
const {
  getAllAttendances,
  getAttendanceById,
  deleteAttendanceById,
  deleteAllAttendances,
  addAttendance,
  updateAttendanceById,
} = require("./attendance.service");

const router = express.Router();

// get all attendances
router.get("/", async (req, res) => {
  try {
    const result = await getAllAttendances();

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// insert an attendance
router.post("/", async (req, res) => {
  const { date, wasPresent, wasLate, enrollmentStudentId, enrollmentCourseId } =
    req.body;

  try {
    await addAttendance(
      new Date(date),
      Boolean(wasPresent),
      Boolean(wasLate),
      parseInt(enrollmentStudentId),
      parseInt(enrollmentCourseId)
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

// get attendance by studentId and courseId
router.get(
  "/:enrollmentStudentId/:enrollmentCourseId/:date",
  async (req, res) => {
    try {
      const result = await getAttendanceById(
        parseInt(req.params.enrollmentStudentId),
        parseInt(req.params.enrollmentCourseId),
        new Date(req.params.date)
      );

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
);

// delete attendance by id
router.delete(
  "/:enrollmentStudentId/:enrollmentCourseId/:date",
  async (req, res) => {
    try {
      await deleteAttendanceById(
        parseInt(req.params.enrollmentStudentId),
        parseInt(req.params.enrollmentCourseId),
        new Date(req.params.date)
      );

      res.status(200).json({
        status: "success",
        message: "data berhasil dihapus",
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
);

// delete all attendances
router.delete("/", async (req, res) => {
  try {
    await deleteAllAttendances();

    res.status(200).json({
      status: "success",
      message: "semua data berhasil dihapus",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// update attendance by id
router.patch(
  "/:enrollmentStudentId/:enrollmentCourseId/:date",
  async (req, res) => {
    const {
      date,
      wasPresent,
      wasLate,
      enrollmentStudentId,
      enrollmentCourseId,
    } = req.body;

    try {
      await updateAttendanceById(
        parseInt(req.params.enrollmentStudentId),
        parseInt(req.params.enrollmentCourseId),
        new Date(req.params.date),
        new Date(date),
        Boolean(wasPresent),
        Boolean(wasLate),
        parseInt(enrollmentStudentId),
        parseInt(enrollmentCourseId)
      );

      res.status(200).json({
        status: "success",
        message: "data berhasil diperbarui",
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
