-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "completed" BOOLEAN,
ALTER COLUMN "name" DROP NOT NULL;
