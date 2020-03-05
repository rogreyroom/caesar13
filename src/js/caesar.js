export default function caesar(input, rot) {
	if (typeof input !== 'string') {
		throw new TypeError("It's not a String!");
	}
	if (input.length < 1) {
		throw new Error('The string is empty!');
	}

	const inputArray = [
		...input
	];
	const result = [];

	inputArray.forEach(char => {
		let isUpperCase = char === char.toUpperCase() ? true : false;
		let isChar = char.match(/[a-z]|[A-Z]/g) ? true : false;

		if (isChar) {
			const newChar = findNewChar(char, rot);
			result.push(isUpperCase ? newChar.toUpperCase() : newChar);
		} else {
			result.push(char);
		}
		isChar = false;
		isUpperCase = false;
	});
	return result.join('');
}

function findNewChar(char, rot) {
	let theRot = rot;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const idx = alphabet.indexOf(char.toLowerCase());
	let newIdx;
	theRot = +theRot;

	if (idx + theRot > alphabet.length - 1) {
		newIdx = theRot - (alphabet.length - idx);
	} else {
		newIdx = idx + theRot;
	}
	return alphabet[newIdx];
}
