const Movies = require('./moviesModel.js');
const db = require('../data/dbConfig.js');


beforeEach(() => {
  return db('movies').truncate();
});

describe('The Movies Model', () => {

  describe('The Insert Fn', () => {
    it('should insert a movie into the db', async () => {
      await Movies.insert({ name: 'Avengers: Age of Ultron', year_released: 2016 })

      const movies = await db('movies');
      expect(movies.length).toBe(1);
      expect(movies[0]).toEqual({ id: 1, name: 'Avengers: Age of Ultron', year_released: 2016 });
    });

    it('should return the new movie id created from the insert', async () =>{
      await Movies.insert({ name: 'Avengers: Age of Ultron', year_released: 2016 })

      const movies = await db('movies');
      expect(movies.length).toBe(1);
      expect(movies[0].name).toBe('Avengers: Age of Ultron');
    });

  }); // insert fn describe

  describe('The Delete Fn', () => {
    it("should return the deleted movie's id", async () => {
      await Movies.insert({ name: 'Avengers: Age of Ultron', year_released: 2016 })

      const deletedItem = await Movies.remove(1).then(response => {
        return response
      })
      expect(deletedItem.id).toBe(1);
      expect(deletedItem.name).toBe('Avengers: Age of Ultron')
    })
  })
}) // main describe
