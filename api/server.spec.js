const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

//cleans up database
beforeEach(()=> {
  return db('movies').truncate();
});

describe('the server', () => {

  it('should set testing environment', () => {
      const env = process.env.DB_ENV;

      expect(env).toBe('testing');
    });

    describe('Get /', () => {
      it ('should return status 200', async () => {
        const res = await request(server).get('/');

        expect(res.status).toBe(200);
      });

      it('should return JSON', async ()=>{
        const res = await request(server).get('/');

        expect(res.type).toBe("application/json");
      });

      it('should return { api: "up" }', async() =>{
        const res = await request(server).get('/');
        expect(res.body).toMatchObject({ message: 'hello there stranger' });
      })
    })

    describe('Insert /movies', () => {

      it('should respond with a 500 error when there are no added data', async () => {
        const res = await request(server).post('/movies');
        expect(res.status).toBe(500);
        expect(res.type).toBe("application/json");
        expect(res.body).toEqual({'err': 'Internal Server Error'});
      })



      it('should respond with an object if a movie gets added', async() => {
        const res = await request(server).post('/movies')
        .send({ name: 'Avengers: Age of Ultron', year_released: 2016 })
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({ id: 1, name: 'Avengers: Age of Ultron', year_released: 2016 })
      })
    }) // describe insert /movies

}) //main describe
