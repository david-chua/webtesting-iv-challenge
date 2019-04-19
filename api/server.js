const express = require('express');

const movies = require('../movies/moviesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'hello there stranger' });
});

server.post('/movies', async(req,res) => {
  const newMovie = {
    name: req.body.name,
    year_released: req.body.year_released
  }

  movies
    .insert(newMovie)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({err: 'Internal Server Error'})
    })
})

module.exports = server;
