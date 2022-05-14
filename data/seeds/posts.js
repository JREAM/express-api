exports.seed = (knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
        {
          id: 1,
          title: 'Hello World',
          body: 'Lorem',
        },
        {
          id: 2,
          title: 'Goodbye World',
          body: "Lipsum",
        }
      ])
  })
}
