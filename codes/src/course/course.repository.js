const prisma = require("../db");

const findCourses = async () => {
  const courses = await prisma.mataKuliah.findMany();

  return courses;
};

const findCourseById = async (id) => {
  const course = await prisma.mataKuliah.findUnique({
    where: {
      nim,
    },
  });

  return course;
};

const insertCourse = async (id, nama, ruangan, paralel) => {
  const course = await prisma.mataKuliah.create({
    data: {
      id,
      nama,
      ruangan,
      paralel,
    },
  });

  return course;
};

const removeCourseById = async (id) => {
  const course = await prisma.mataKuliah.delete({
    where: {
      id,
    },
  });

  return course;
};

const removeAllCourses = async () => {
  const course = await prisma.mataKuliah.deleteMany();

  return course;
};

module.exports = {
  findCourses,
  findCourseById,
  insertCourse,
  removeCourseById,
  removeAllCourses,
};
