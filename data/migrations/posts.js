exports.up = (knex) => {

  return knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.string('title', 96).notNullable()
    table.string('body').notNullable()
  })

}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('posts')
}
