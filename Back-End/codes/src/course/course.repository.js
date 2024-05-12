const prisma = require("../db");

const findAllCourses = async () => {
  const courses = await prisma.course.findMany();

  return courses;
};

const findCourseById = async (id) => {
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  return course;
};

const insertCourse = async (title, credit) => {
  const course = await prisma.course.create({
    data: {
      title,
      credit,
    },
  });

  return course;
};

const removeCourseById = async (id) => {
  const course = await prisma.course.delete({
    where: {
      id,
    },
  });

  return course;
};

const removeAllCourses = async () => {
  const course = await prisma.course.deleteMany();

  // Reset the sequence back to 1 after deleting all courses
  const tableName = "course"; // replace with your table name
  const columnName = "id"; // replace with your column name
  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('${tableName}', '${columnName}'), 1, false);`
  );

  return course;
};

const editCourseById = async (id, title, credit) => {
  const course = await prisma.course.update({
    where: {
      id,
    },
    data: {
      title,
      credit,
    },
  });

  return course;
};

module.exports = {
  findAllCourses,
  findCourseById,
  insertCourse,
  removeCourseById,
  removeAllCourses,
  editCourseById,
};
