
exports.up = function(knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary()
        table.integer ('score')
        table.string ('answer')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable ('answers')
};
