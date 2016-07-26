exports.up = function(knex, Promise) {
	return knex.schema.createTable("app_user", function(table) {
		table.increments();
		table.string("pw");
		table.string("fname");
		table.string("lname");
		table.string("phone");
	});
};

exports.down = function(knex, Promise) {
	knex.schema.dropTableIfExists("app_user");
};
