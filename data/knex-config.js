module.exports = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './trecaNF.sqlite3'
  }
});
