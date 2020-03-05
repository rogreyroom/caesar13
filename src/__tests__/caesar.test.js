const caesar = require('../js/caesar');
const rot = 13;

describe(`Caesar cipher ROT${rot} function`, () => {
	describe('when not string', () => {
		test('input is not typeof string', () => {
			const input = 12345;
			expect(() => {
				caesar(input, rot);
			}).toThrow(TypeError);
		});
	});

	describe('when string', () => {
		test('input is empty', () => {
			const input = '';
			expect(() => {
				caesar(input, rot);
			}).toThrow(Error);
		});
	});

	describe('when ciphering input single character', () => {
		const inputWord = 'a1b';
		const inputWordArray = [
			...inputWord
		];
		const indexOfFn = jest.fn((char, arr) => arr.indexOf(char.toLowerCase()));
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';

		describe.each(inputWordArray)('check char %s', char => {
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

	describe(`when caesar${rot} is working properly`, () => {
		test('it should not change number position', () => {
			const inputString = 'a1b';
			expect(caesar(inputString, rot)).toBe('n1o');
		});
		test('it should not change character case', () => {
			const inputString = 'A1b';
			expect(caesar(inputString, rot)).toBe('N1o');
		});
		test('it should be equal when mix string and other characters', () => {
			const inputString = 'a1b';
			expect(caesar(inputString, rot)).toBe('n1o');
		});
		test('it should be equal when only othe characters', () => {
			const inputString = '0123456789';
			expect(caesar(inputString, rot)).toBe('0123456789');
		});
	});

	describe(`when reversing caesar${rot} result string should give the input`, () => {
		const input = 'a1b';
		const result = caesar(input, rot);
		test('it should be equal when encryption', () => {
			expect(result).toBe('n1o');
		});
		test('it should be equal when decryption', () => {
			const res = caesar(result, rot);
			expect(res).toBe(input);
		});
	});
});
