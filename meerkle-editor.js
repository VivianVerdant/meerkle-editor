var meerkle_buttons;
var meerkle_size_input;
var meerkle_size;
var meerkle_spacing_input;
var meerkle_spacing;

meerkle_buttons = document.querySelectorAll("button.meerkle");
console.log(meerkle_buttons);

meerkle_size_input = document.getElementById("meerkle-size-input");
console.log(meerkle_size_input);
meerkle_size_input.oninput = (value) => {meerkle_size = meerkle_size_input.value; update_textareas()};

meerkle_spacing_input = document.getElementById("meerkle-spacing-input");
console.log(meerkle_spacing_input)
meerkle_spacing_input.oninput = (value) => {meerkle_spacing = meerkle_spacing_input.value; update_textareas()};

function update_textareas() {
	let area = document.getElementById("meerkle-texarea");
	let str = `font-size: ${meerkle_size};letter-spacing: ${meerkle_spacing}rem;`;
	console.log(str);
	area.setAttribute("style", str);
}

for (button in meerkle_buttons) {
	button.onclick = (event) => {meerkle_button_click(event.target)};
}

function meerkle_button_click(target) {
	console.log(target);
}