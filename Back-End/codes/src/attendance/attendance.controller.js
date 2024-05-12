const express = require("express");
const db = require("../../db");
const prisma = require("../db");

const router = express.Router();

// get all attendances
router.get("/", async (req, res) => {
  try {
    const result = await prisma.attendance.findMany();

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
    await prisma.attendance.create({
      data: {
        date: new Date(date),
        wasPresent: Boolean(wasPresent),
        wasLate: Boolean(wasLate),
        enrollmentStudentId: parseInt(enrollmentStudentId),
        enrollmentCourseId: parseInt(enrollmentCourseId),
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

// get attendance by studentId and courseId
router.get(
  "/:enrollmentStudentId/:enrollmentCourseId/:date",
  async (req, res) => {
    try {
      const result = await prisma.attendance.findUnique({
        where: {
          enrollmentStudentId_enrollmentCourseId_date: {
            enrollmentStudentId: parseInt(req.params.enrollmentStudentId),
            enrollmentCourseId: parseInt(req.params.enrollmentCourseId),
            date: new Date(req.params.date),
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
  }
);

// delete attendance by id
router.delete(
  "/:enrollmentStudentId/:enrollmentCourseId/:date",
  async (req, res) => {
    try {
      await prisma.attendance.delete({
        where: {
          enrollmentStudentId_enrollmentCourseId_date: {
            enrollmentStudentId: parseInt(req.params.enrollmentStudentId),
            enrollmentCourseId: parseInt(req.params.enrollmentCourseId),
            date: new Date(req.params.date),
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
  }
);

// delete all attendances
router.delete("/", async (req, res) => {
  try {
    await prisma.attendance.deleteMany();

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
      await prisma.attendance.update({
        where: {
          enrollmentStudentId_enrollmentCourseId_date: {
            enrollmentStudentId: parseInt(req.params.enrollmentStudentId),
            enrollmentCourseId: parseInt(req.params.enrollmentCourseId),
            date: new Date(req.params.date),
          },
        },
        data: {
          date: new Date(date),
          wasPresent: Boolean(wasPresent),
          wasLate: Boolean(wasLate),
          enrollmentStudentId: parseInt(enrollmentStudentId),
          enrollmentCourseId: parseInt(enrollmentCourseId),
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
  }
);

module.exports = router;
