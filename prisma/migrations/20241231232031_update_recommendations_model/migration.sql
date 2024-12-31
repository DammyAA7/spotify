/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `auth_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spotify_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recommendations" DROP CONSTRAINT "Recommendations_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "Recommendations" DROP CONSTRAINT "Recommendations_toUserId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "code",
DROP COLUMN "id",
ADD COLUMN     "auth_id" TEXT NOT NULL,
ADD COLUMN     "spotify_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("auth_id");

-- AddForeignKey
ALTER TABLE "Recommendations" ADD CONSTRAINT "Recommendations_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("auth_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendations" ADD CONSTRAINT "Recommendations_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("auth_id") ON DELETE RESTRICT ON UPDATE CASCADE;
