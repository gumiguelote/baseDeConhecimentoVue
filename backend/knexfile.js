const { db } = require('./.env');

module.exports = {
    client: db.client,
    connection: {
      database: db.database,
      user: db.user,
      password: db.password,
      host: db.host,
      port: db.port,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
