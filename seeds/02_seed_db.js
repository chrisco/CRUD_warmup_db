exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("user_call").del()
		.then(function() {
			return knex("app_user").del();
		})
		.then(function() {
			return Promise.all([
				// Inserts seed entries
				knex("app_user").insert({
					pw: "$2a$04$oSY.1hOj44Bxezi.NTsr/.HZIlgTqPIueVFqNri7Y5sOD4eXm91Yi",
					fname: "Alice",
					lname: "Jones",
					phone: "5551212"
				}),
				knex("app_user").insert({
					pw: "$2a$04$oSY.1hOj44Bxezi.NTsr/.HZIlgTqPIueVFqNri7Y5sOD4eXm91Yi",
					fname: "Bob",
					lname: "Smith",
					phone: "5552323"
				})
			]);
		})
		.then(function() {
			return knex("app_user").select();
		})
		.then(function(app_users) {
			return Promise.all([
				knex("user_call").insert({
					app_user_id: findAppUserId("Alice", app_users),
					date: "05/05/2016",
					left_message: true,
					incoming: false
				}),
				knex("user_call").insert({
					app_user_id: findAppUserId("Bob", app_users),
					date: "05/06/2016",
					left_message: false,
					incoming: true
				}),
				knex("user_call").insert({
					app_user_id: findAppUserId("Alice", app_users),
					date: "05/07/2016",
					left_message: true,
					incoming: false
				}),
				knex("user_call").insert({
					app_user_id: findAppUserId("Bob", app_users),
					date: "05/08/2016",
					left_message: false,
					incoming: true
				}),
				knex("user_call").insert({
					app_user_id: findAppUserId("Alice", app_users),
					date: "05/09/2016",
					left_message: true,
					incoming: false
				})
			]);
		});
};

function findAppUserId(app_user, list) {
	for (var i = 0; i < list.length; i++) {
		if (app_user === list[i].app_user) {
			return list[i].id;
		}
	}
}
