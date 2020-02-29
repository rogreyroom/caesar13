import '../scss/style.scss';
import view from './view';
import caesar from './caesar';

const bodyTarget = document.querySelector('.body--js');
const rotSelect = document.querySelector('.rot-select--js');
const inputText = document.querySelector('.input-text--js');
const outputText = document.querySelector('.output-text--js');
const rotOptions = [
	...Array(26).keys()
];

rotOptions.forEach(option => {
	const newOption = document.createElement('option');
	newOption.value = option;
	newOption.text = option;
	if (option === 13) newOption.selected = true;
	rotSelect.add(newOption);
});

function runCaesar({ key, target }) {
	if (key === 'Enter' || (target !== inputText && target !== rotSelect)) {
		const rot = rotSelect.options[rotSelect.selectedIndex].value;

		if (inputText.value !== '') {
			outputText.textContent = caesar(inputText.value, rot);
			inputText.value = '';
		}
	}
}

function clearFields() {
	inputText.value = '';
	outputText.textContent = '';
}

inputText.addEventListener('click', clearFields);
bodyTarget.addEventListener('click', runCaesar);
inputText.addEventListener('keyup', runCaesar);
