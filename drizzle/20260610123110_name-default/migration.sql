ALTER TYPE "user_status" ADD VALUE 'trialing';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DEFAULT 'anon';