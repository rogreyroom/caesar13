import '../scss/style.scss';
import view from './view';
import caesar from './caesar';

const bodyTarget = document.querySelector('.body--js');
const rotSelect = document.querySelector('.rot-select--js');
const inputText = document.querySelector('.input-text--js');
const outputText = document.querySelector('.output-text--js');

function runCaesar({ key, target }) {
	const userClickedBody = target !== inputText && target !== rotSelect;
	if (key === 'Enter' || userClickedBody) {
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
