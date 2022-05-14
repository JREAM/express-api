exports.up = (knex) => {

  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('firstName', 24)
    table.string('lastName', 24)
    table.string('email', 48).notNullable()
    table.string('password', 96).notNullable()
  })

}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users')
}
