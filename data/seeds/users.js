exports.seed = (knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@smith.com',
          password: 'john'
        },
        {
          id: 2,
          firstName: 'Pocha',
          lastName: "Hontus",
          email: "pocha@hontus.com",
          password: "pocha"
        }
      ])
  })
}
