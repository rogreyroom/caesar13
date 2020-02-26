const caesar13 = require('../js/caesar13');
const rot = 13;

describe('Caesar cipher ROT13 function', () => {
	describe('when not string', () => {
		test('input is not typeof string', () => {
			const input = 12345;
			expect(() => {
				caesar13(input, rot);
			}).toThrow(TypeError);
		});
	});

	describe('when string', () => {
		test('input is empty', () => {
			const input = '';
			expect(() => {
				caesar13(input, rot);
			}).toThrow(Error);
		});
	});

	describe('when ciphering input single character', () => {
		const inputWord = 'a1b';
		const inputWordArray = [
			...inputWord
		];
		const indexOfFn = jest.fn((char, arr) => arr.indexOf(char.toLowerCase()));
		// prettier-ignore
		const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

		inputWordArray.forEach(char => {
			if (char === char.toUpperCase()) {
				test('is upper case', () => {
					expect(char === char.toUpperCase()).toBeTruthy();
				});
			} else {
				test('is upper case', () => {
					expect(char === char.toUpperCase()).toBeFalsy();
				});
			}

			if (char.match(/[a-z]|[A-Z]/g)) {
				test('matches pattern /[a-z]|[A-Z]/g', () => {
					expect(char).toMatch(/[a-z]|[A-Z]/g);
				});

				test('find indexOf lowercase character inside the alphabet array', () => {
					expect(indexOfFn(char, alphabet)).not.toBe(-1);
				});
			}
		});
	});

	describe('when caesar13 is working properly', () => {
		test('it should not change number position', () => {
			const inputString = 'a1b';
			expect(caesar13(inputString, rot)).toBe('n1o');
		});
		test('it should not change character case', () => {
			const inputString = 'A1b';
			expect(caesar13(inputString, rot)).toBe('N1o');
		});
		test('it should be equal', () => {
			const inputString = 'a1b';
			expect(caesar13(inputString, rot)).toBe('n1o');
		});
		test('it should be equal', () => {
			const inputString = '0123456789';
			expect(caesar13(inputString, rot)).toBe('0123456789');
		});
	});

	describe('when reversing caesar13 result string should give the input', () => {
		const input = 'a1b';
		const result = caesar13(input, rot);
		test('it should be equal', () => {
			expect(result.toBe('1no'));
		});
		test('it should be equal', () => {
			expect(caesar13(result, rot).toBe(input));
		});
	});
});
