ALTER TABLE "users" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "user_status";--> statement-breakpoint
CREATE TYPE "user_status" AS ENUM('active', 'suspended', 'deleted', 'on_hold', 'trialing');--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "status" SET DATA TYPE "user_status" USING "status"::"user_status";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "name";