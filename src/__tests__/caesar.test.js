import caesar from '../js/caesar';
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

	describe('when checking input single character', () => {
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
		let input = '';
		let result = '';

		beforeEach(() => {
			input = 'dJqE123ooAbb5';
			result = caesar(input, rot);
		});

		it(`should encrypt initial message with Rot${rot}`, () => {
			expect(result).toBe('qWdR123bbNoo5');
		});
		it(`should be same as initial message when encrypted with Rot${rot} for the second time`, () => {
			let res = caesar(result, rot);
			expect(res).toBe(input);
		});
	});
});
