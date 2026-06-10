import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const userStatus = pgEnum('user_status', ['active', 'archived', 'suspended', 'deleted', 'on_hold', 'trialing']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
	status: userStatus('status'),
});
