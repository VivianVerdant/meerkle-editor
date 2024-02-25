var meerkle_buttons;
var meerkle_size_input;
var meerkle_size;
var meerkle_spacing_input;
var meerkle_spacing;

meerkle_buttons = document.querySelectorAll("button.meerkle");
console.log(meerkle_buttons);

meerkle_size_input = document.getElementById("meerkle-size-input");
console.log(meerkle_size_input);
meerkle_size_input.oninput = (value) => {meerkle_size = value; update_textareas()};

meerkle_spacing_input = document.getElementById("meerkle-spacing-input");
console.log(meerkle_spacing_input)
meerkle_spacing_input.oninput = (value) => {meerkle_spacing = value; update_textareas()};

function update_textareas() {
	let area = document.getElementById("meerkle-texarea");
	area.style = `font-size: ${meerkle_size};letter-spacing: ${meerkle_spacing}rem;`;
}

for (button in meerkle_buttons) {
	button.onclick = meerkle_button_click(this);
}

function meerkle_button_click(element) {
	console.log(element);
}