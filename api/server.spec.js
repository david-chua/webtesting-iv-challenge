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

})
