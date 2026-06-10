ALTER TYPE "user_status" ADD VALUE 'trialing';--> statement-breakpoint
ALTER TYPE "user_status" ADD VALUE 'frozen';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar(255) USING "name"::varchar(255);