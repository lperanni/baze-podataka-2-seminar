// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "seminar",
      user: "postgres",
      password: "speedy900",
    },
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
