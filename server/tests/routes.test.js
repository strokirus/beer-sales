const request = require('supertest');
const http = require('http');
const app = require('../index.js');
const { sanitize } = require('../src/utils/utils');

describe('Post Endpoints', () => {
    let server;

    beforeAll((done) => {
      server = http.createServer(app);
      server.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });

    const endpoints = ['search'];
    const status = [200, 412];

    endpoints.forEach(endpoint => {
        status.forEach(code => {
            it(`${endpoint} ${code}`, async () => {
                const q = 'neymar';
                let send = `/${endpoint}?query=${q}`;
   
                if (code !== 200) {
                    send = `/${endpoint}?que=${q}`;
                }
                
                const response = await request(app).get(send);
                
                expect(response.status).toBe(code);
            });
        });
    });
});

describe('Test Sanitize', () => {
    it(`Correct sanitize`, () => {
        const response = sanitize('BoítaCaZes');

        expect(response).toBe('boitacazes');
    });
});