const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove
}

async function insert(movie){
  const [id] = await db('movies').insert(movie);
  return db('movies').where({ id }).first();
}

function remove(id) {
  return null;
}
