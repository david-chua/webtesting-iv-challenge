module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/realMovies.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  //running migrations: knex migrate:latest --env=testing
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testMovies.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
