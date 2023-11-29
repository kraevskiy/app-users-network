/*
  Warnings:

  - The `subscriptions` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `user_id` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `count` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_user_id_fkey";

-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "subscriptions",
ADD COLUMN     "subscriptions" INTEGER[];

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
