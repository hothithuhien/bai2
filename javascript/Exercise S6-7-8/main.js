let input = document.getElementById('input');
let displayid = document.getElementById('displayid');

function updateInput(value) {
	input.value += value;

	if (input.value) {
		displayid.getAttribute('class');
		displayid.setAttribute('class', 'display_new input');
	}
}

function clearInput() {
	input.value = '';
}
function del() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	let expression = input.value;
	if (expression) {
		try {
			input.value = eval(expression);
		} catch (error) {
			input.value = 'Error';
		}
	}

}


