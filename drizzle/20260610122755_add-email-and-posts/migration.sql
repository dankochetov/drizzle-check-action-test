ALTER TYPE "user_status" ADD VALUE 'trialing';--> statement-breakpoint
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY,
	"title" text
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" text;