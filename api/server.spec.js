const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	describe('GET /', () => {
		it('should respond with 200 ok', () => {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.status).toBe(200);
				})
				.catch();
		});
	});
	it.skip('should respond with 500 ok', () => {
		return request(server)
			.get('/')
			.expect(200);
	});

	it.skip('should respond JSON', () => {
		return request(server)
			.get('/')
			.expect('content-Type', /json/);
	});

	it('should respond with 200 ok', () => {
		return request(server)
			.get('/')
			.then(res => {
				expect(res.body).toEqual({ api: 'up' });
			});
	});
});
