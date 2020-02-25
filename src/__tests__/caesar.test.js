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

	describe('when ciphering input single character', () => {
		const upperCaseChar = 'L';
		const stringNumber = '1';
		const numberNumber = 1;
		const toBeMatchString = 'a';
		const someCharToBeFoundInArray = 'j';
		const indexOfFn = jest.fn((char, arr) => arr.indexOf(char.toLowerCase()));
		// prettier-ignore
		const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
		test('is upper case', () => {
			expect(upperCaseChar === upperCaseChar.toUpperCase()).toBeTruthy();
		});
		test('is not a number', () => {
			expect(typeof stringNumber === 'number').toBeFalsy();
		});
		test('is a number', () => {
			expect(typeof numberNumber === 'number').toBeTruthy();
		});
		test('matches pattern /[a-z]|[A-Z]/g', () => {
			expect(toBeMatchString).toMatch(/[a-z]|[A-Z]/g);
		});
		test('find indexOf lowercase character inside the alphabet array', () => {
			expect(indexOfFn(someCharToBeFoundInArray, alphabet)).not.toBe(-1);
		});
	});
});
