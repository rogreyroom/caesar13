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
		const isUpperCase = char === char.toUpperCase();
		const isChar = !!char.match(/[a-z]|[A-Z]/g);

		if (isChar) {
			const newChar = findNewChar(char, rot);
			result.push(isUpperCase ? newChar.toUpperCase() : newChar);
		} else {
			result.push(char);
		}
	});
	return result.join('');
}

function findNewChar(char, rot) {
	const theRot = +rot;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const idx = alphabet.indexOf(char.toLowerCase());
	let newIdx;

	if (idx + theRot > alphabet.length - 1) {
		newIdx = theRot - (alphabet.length - idx);
	} else {
		newIdx = idx + theRot;
	}
	return alphabet[newIdx];
}
