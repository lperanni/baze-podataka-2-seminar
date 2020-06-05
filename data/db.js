const db = require('knex')({
  client: "postgresql",
  connection: {
    database: "seminar",
    user: "postgres",
    password: "speedy900",
  },
});

async function addRelation(relation) {
  return await Promise.resolve(db("relations").insert({ R: relation}).returning("relation_id").then(data => { return data}));
}

async function addKeysToRelation(relation_id, string){
  string.split(", ").map(async key => {
    await Promise.resolve(db("keys").insert({relation_id, K: key}).then(data => {console.log(data)}));
  })
}

async function addFminToRelation(relation_id, string) {
  string.split(", ").map(async fmin => {
    await Promise.resolve(db("fmin").insert({ relation_id, dependency: fmin }).then(data => { console.log(data) }));
  })
}

const getAllRelations = () => {
  return db
    .select('*')
    .from('relations');
}

const getKeysOfRelation = (relation_id) => {
  return db("keys").select("K").where({ relation_id });
}
const getFminOfRelation = (relation_id) => {
  return db("fmin").select("dependency").where({ relation_id });
}

const getRelationById = (id) => {
  return db 
    .select('*')
    .from('relations')
    .where({ relation_id: id}).then();

}

const deleteRelation = (relation_id) => {
  db("relations")
    .delete()
    .where({relation_id})
    .then(success => { console.log(success)})
    .catch(err => console.err(err));
}

module.exports = { 
  getAllRelations,
  getRelationById,
  getKeysOfRelation,
  getFminOfRelation,
  addFminToRelation,
  addKeysToRelation,
  addRelation,
  deleteRelation
}

