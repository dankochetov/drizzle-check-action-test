import { index, pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const userStatus = pgEnum('user_status', ['active', 'suspended', 'deleted', 'trialing', 'frozen']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: text('email'),
	status: userStatus('status'),
}, (t) => [index('users_status_idx').on(t.status)]);

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	title: text('title'),
});
