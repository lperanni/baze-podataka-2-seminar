
exports.up = function(knex) {
  // Table for Relation schema
  return knex.schema.createTable('relations', tbl => {
    tbl.increments('relation_id');
    tbl.string('R', 128);
    tbl.timestamps(true,true)
  })

  //Table for keys in relations
  .createTable('keys', tbl => {
    tbl.increments('key_id');
    tbl.string('K', 50);
    tbl.integer('relation_id')
      .unsigned()
      .references('relation_id')
      .inTable('relations')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  //Table for fmins in relations
  .createTable('fmin', tbl => {
    tbl.increments('fmin_id');
    tbl.string('dependency', 50);
    tbl.integer('relation_id')
      .unsigned()
      .references('relation_id')
      .inTable('relations')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('relations')
      .dropTableIfExists('keys')
      .dropTableIfExists('fmin')

};
