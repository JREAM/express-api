exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {id: 1, firstName: 'John', lastName: 'Smith', email: 'user@user.com', password: 'user'},
    {id: 2, firstName: 'Pocha', lastName: 'Hontus', email: 'pocha@hontus.com', 'password': 'pocha'},
  ]);
};
