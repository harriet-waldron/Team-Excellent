const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAnswer
}

function getAnswer (score, db = connection) {
  return db('answers')
    .select()
    .where('score', score)
}
