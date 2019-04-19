const express = require('express');

const movies = require('../movies/moviesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'hello there stranger' });
});

module.exports = server;
