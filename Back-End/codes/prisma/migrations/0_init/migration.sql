-- CreateTable
CREATE TABLE "mata_kuliah" (
    "id_mk" VARCHAR(10) NOT NULL,
    "nama_mk" VARCHAR(50) NOT NULL,
    "ruangan" VARCHAR(25) NOT NULL,
    "paralel" CHAR(1) NOT NULL,

    CONSTRAINT "mata_kuliah_pkey" PRIMARY KEY ("id_mk")
);

