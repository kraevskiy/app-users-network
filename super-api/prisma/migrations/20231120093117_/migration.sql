/*
  Warnings:

  - You are about to drop the column `trial_period` on the `Subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "trial_period",
ADD COLUMN     "trial_period_days" INTEGER;
