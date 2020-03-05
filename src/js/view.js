const bottomBg = document.querySelector('.bottom-bg--js');
const screenWidth = window.outerWidth;
const rotSelect = document.querySelector('.rot-select--js');
const rotOptions = [
	...Array(26).keys()
];

bottomBg.setAttribute('width', `${screenWidth}`);

rotOptions.forEach(option => {
	const newOption = document.createElement('option');
	newOption.value = option;
	newOption.text = option;
	if (option === 13) newOption.selected = true;
	rotSelect.add(newOption);
});
