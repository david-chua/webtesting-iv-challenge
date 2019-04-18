
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
              { name: 'Doctor Strange', year_released: 2016 },
              { name: 'Avengers: Endgame', year_released: 2019 },
              { name: 'pippin', year_released: 1995 },
              { name: 'merry', year_released: 2005 },
            ]
);
    });
};
