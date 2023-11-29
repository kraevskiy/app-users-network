/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('ADMIN', 'USER', 'MANAGER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRoleType" NOT NULL;
