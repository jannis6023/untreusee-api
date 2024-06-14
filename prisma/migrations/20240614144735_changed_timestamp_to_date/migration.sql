/*
  Warnings:

  - The primary key for the `Temperature` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `timestamp` column on the `Temperature` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Temperature" DROP CONSTRAINT "Temperature_pkey",
DROP COLUMN "timestamp",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Temperature_pkey" PRIMARY KEY ("sensorId", "timestamp");
