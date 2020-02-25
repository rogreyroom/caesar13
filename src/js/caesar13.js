function caesar13(input) {
	if (typeof input !== 'string') {
		throw new TypeError("It's not a String!");
	}
	if (input.length < 1) {
		throw new Error('The string is empty!');
	}
}

module.exports = caesar13;
