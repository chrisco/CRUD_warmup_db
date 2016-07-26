exports.up = function(knex, Promise) {
	return knex.schema.createTable("user_call", function(table) {
		table.increments();
    table.integer("app_user_id").references("app_user.id").onDelete('CASCADE');
		table.date("date");
		table.boolean("left_message");
		table.boolean("incoming");
	});
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("user_call");
};
