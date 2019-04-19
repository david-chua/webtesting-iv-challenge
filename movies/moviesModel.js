const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove
}

async function insert(movie){
  const [id] = await db('movies').insert(movie);
  return db('movies').where({ id }).first();
}

async function remove(id) {
  const Deletedmovie = await db('movies').where({id}).first();
  await db('movies')
    .where('id', id)
    .del();
  return Deletedmovie

}
