module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'cluckr_app'
    },
    migrations: {
      directory: './db/migrations'
    }
  }
};