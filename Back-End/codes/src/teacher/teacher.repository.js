const prisma = require("../db");

const findAllTeachers = async () => {
  const teachers = await prisma.teacher.findMany();

  return teachers;
};

const insertTeacher = async (name, email, password) => {
  const teacher = await prisma.teacher.create({
    data: {
      name,
      email,
      password,
    },
  });

  return teacher;
};

const findTeacherById = async (id) => {
  const teacher = await prisma.teacher.findUnique({
    where: {
      id,
    },
  });

  return teacher;
};

const removeTeacherById = async (id) => {
  const teacher = await prisma.teacher.delete({
    where: {
      id,
    },
  });

  return teacher;
};

const removeAllTeachers = async () => {
  const teacher = await prisma.teacher.deleteMany();

  // Reset the sequence back to 1 after deleting all teachers
  const tableName = "teacher"; // replace with your table name
  const columnName = "id"; // replace with your column name
  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('${tableName}', '${columnName}'), 1, false);`
  );

  return teacher;
};

const editTeacherById = async (id, name, email, password) => {
  const teacher = await prisma.teacher.update({
    where: {
      id,
    },
    data: { name, email, password },
  });

  return teacher;
};

module.exports = {
  findAllTeachers,
  findTeacherById,
  insertTeacher,
  removeTeacherById,
  removeAllTeachers,
  editTeacherById,
};
