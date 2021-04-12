

exports.seed = async function(knex) {
 await knex("users").insert([
   {id: 1, username: "admin", phoneNumber:1234567890, password:"password"}
 ])
};