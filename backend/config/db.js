const config = require('../knexfile.js');
const knex = require('knex')(config);

//não é o ideal 
//knex.migrate.latest([config])

module.exports = knex;