-- CreateTable
CREATE TABLE "Memorias" (
    "id" SERIAL NOT NULL,
    "imagem" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Memorias_pkey" PRIMARY KEY ("id")
);
