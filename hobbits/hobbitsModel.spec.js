const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

//returns 201
// inserts the hobbit

describe('hobbits model', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});
	describe('insert', () => {
		it('should insert the provided hobbit', async () => {
			await Hobbits.insert({ name: 'gaffer' });
			await Hobbits.insert({ name: 'aragon' });

			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(2);
		});

		it('should insert the provided hobbit', async () => {
			let hobbit = await Hobbits.insert({ name: 'gaffer' });
			expect(hobbit.name).toBe({ name: 'gaffer' });

			hobbit = await Hobbits.insert({ name: 'sam ' });
			expect(hobbit.name).toBe('sam');
		});
	});
});
