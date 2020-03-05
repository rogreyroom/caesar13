function caesar(input, rot) {
	if (typeof input !== 'string') {
		throw new TypeError("It's not a String!");
	}
	if (input.length < 1) {
		throw new Error('The string is empty!');
	}

	const inputArray = [
		...input
	];
	let isUpperCase = false;
	let isChar = false;
	const result = [];

	inputArray.forEach(char => {
		if (char === char.toUpperCase()) isUpperCase = true;
		if (char.match(/[a-z]|[A-Z]/g)) isChar = true;

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
	// prettier-ignore
	const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
	const idx = alphabet.indexOf(char.toLowerCase());
	let newIdx;
	rot = +rot;

	if (idx + rot > alphabet.length - 1) {
		newIdx = rot - (alphabet.length - idx);
	} else {
		newIdx = idx + rot;
	}
	return alphabet[newIdx];
}

module.exports = caesar;
