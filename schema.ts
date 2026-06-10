import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const userStatus = pgEnum('user_status', ['active', 'archived', 'banned', 'suspended', 'deleted', 'restored']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
	status: userStatus('status'),
});
