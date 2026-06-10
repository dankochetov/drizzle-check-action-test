import { index, pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const userStatus = pgEnum('user_status', ['active', 'archived', 'suspended', 'deleted', 'trialing', 'frozen']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).default('anon'),
	status: userStatus('status'),
}, (t) => [index('users_status_idx').on(t.status)]);

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	body: text('body'),
});
