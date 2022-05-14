exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, title: 'Hello', body: 'to the world.'},
    {id: 2, title: 'Big', body: 'elephants make noise.'},
    {id: 3, title: 'Planet', body: 'is Earth, we are here.'}
  ]);
};
