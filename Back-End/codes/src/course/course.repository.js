const prisma = require("../db");

const findAllCourses = async () => {
  const courses = await prisma.mataKuliah.findMany();

  return courses;
};

const findCourseById = async (ID_Mk, nama_mk) => {
  const course = await prisma.mataKuliah.findUnique({
    where: {
      idMk,
    },
  });

  return course;
};

const insertCourse = async (idMk, namaMk, ruangan, paralel, idDosen) => {
  const course = await prisma.mataKuliah.create({
    data: {
      idMk,
      namaMk,
      ruangan,
      paralel,
      idDosen,
    },
  });

  return course;
};

const removeCourseById = async (idMk) => {
  const course = await prisma.mataKuliah.delete({
    where: {
      idMk,
    },
  });

  return course;
};

const removeAllCourses = async () => {
  const course = await prisma.mataKuliah.deleteMany();

  return course;
};

module.exports = {
  findAllCourses,
  findCourseById,
  insertCourse,
  removeCourseById,
  removeAllCourses,
};
