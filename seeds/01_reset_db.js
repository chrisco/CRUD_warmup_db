exports.seed = function(knex, Promise) {
	return Promise.all([
		knex.raw('TRUNCATE user_call RESTART IDENTITY CASCADE'),
		knex.raw('TRUNCATE app_user RESTART IDENTITY CASCADE'),
	]);
};
