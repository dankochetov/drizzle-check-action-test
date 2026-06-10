ALTER TABLE "users" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "user_status";--> statement-breakpoint
CREATE TYPE "user_status" AS ENUM('active', 'archived', 'suspended', 'deleted', 'trialing');--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "status" SET DATA TYPE "user_status" USING "status"::"user_status";