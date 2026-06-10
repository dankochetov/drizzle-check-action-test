CREATE TABLE "posts" (
	"id" serial PRIMARY KEY,
	"body" text
);
--> statement-breakpoint
CREATE INDEX "users_status_idx" ON "users" ("status");