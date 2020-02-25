const caesar13 = require('../js/caesar13');

describe('Caesar cipher ROT13 function', () => {
	describe('when not string', () => {
		test('input is not typeof string', () => {
			expect(() => {
				caesar13(12233);
			}).toThrow(TypeError);
		});
	});

	describe('when string', () => {
		test('input is empty', () => {
			expect(() => {
				caesar13('');
			}).toThrow(Error);
		});
	});

	describe('when ciphering input', () => {});
});
