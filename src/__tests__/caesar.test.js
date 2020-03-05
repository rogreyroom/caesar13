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
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const checkIfCharIsUpperCaseFn = jest.fn(char => char === char.toUpperCase());
		const indexOfFn = jest.fn((char, arr) => arr.indexOf(char.toLowerCase()));

		test(`check if char(A) is uppercse`, () => {
			const char = 'A';
			expect(checkIfCharIsUpperCaseFn(char)).toBeTruthy();
		});

		test(`check if char(a) is not uppercse`, () => {
			const char = 'a';
			expect(checkIfCharIsUpperCaseFn(char)).toBeFalsy();
		});

		test(`check if char(B) matches pattern /[a-z]|[A-Z]/g'`, () => {
			const char = 'B';
			expect(char).toMatch(/[a-z]|[A-Z]/g);
		});

		test('find indexOf char(H) inside the alphabet array', () => {
			const char = 'H';
			expect(indexOfFn(char, alphabet)).not.toBe(-1);
		});
	});

	describe(`when caesar${rot} is working properly`, () => {
		it('should not change number position', () => {
			const inputString = 'a1b';
			expect(caesar(inputString, rot)).toBe('n1o');
		});
		it('should not change character case', () => {
			const inputString = 'A1b';
			expect(caesar(inputString, rot)).toBe('N1o');
		});
		it('should be equal when mix string and other characters', () => {
			const inputString = 'a1b';
			expect(caesar(inputString, rot)).toBe('n1o');
		});
		it('should be equal when only other characters', () => {
			const inputString = '0123456789';
			expect(caesar(inputString, rot)).toBe('0123456789');
		});
	});

	describe(`when reversing caesar${rot} result string should give the input`, () => {
		const input = 'dJqE123ooAbb5';
		const result = caesar(input, rot);
		test('it should be equal when encryption', () => {
			expect(result).toBe('qWdR123bbNoo5');
		});
		test('it should be equal when decryption', () => {
			const res = caesar(result, rot);
			expect(res).toBe(input);
		});
	});
});
