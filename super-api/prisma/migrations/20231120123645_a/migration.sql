/*
  Warnings:

  - Changed the type of `card_id` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "card_id",
ADD COLUMN     "card_id" INTEGER NOT NULL;
