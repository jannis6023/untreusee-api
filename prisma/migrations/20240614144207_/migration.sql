/*
  Warnings:

  - The primary key for the `Temperature` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Temperature" DROP CONSTRAINT "Temperature_pkey",
ALTER COLUMN "timestamp" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Temperature_pkey" PRIMARY KEY ("sensorId", "timestamp");
