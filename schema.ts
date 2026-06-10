import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const userStatus = pgEnum('user_status', ['active', 'suspended', 'deleted', 'on_hold', 'trialing']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: text('email'),
	status: userStatus('status'),
});

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	title: text('title'),
});
