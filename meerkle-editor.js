var meerkle_buttons = document.querySelectorAll("button.meerkle");
var meerkle_size_input = document.getElementById("meerkle-size-input");
var meerkle_size = 12;
var meerkle_spacing_input = document.getElementById("meerkle-spacing-input");
var meerkle_spacing = 0;
var romankle_textarea = document.getElementById("romankle-textarea");
var meerkle_textarea = document.getElementById("meerkle-textarea");
var text_string = "";


meerkle_size_input.oninput = (value) => {meerkle_size = meerkle_size_input.value; update_textareas()};

meerkle_spacing_input.oninput = (value) => {meerkle_spacing = meerkle_spacing_input.value; update_textareas()};

function update_textareas() {
	romankle_textarea.value = text_string;
	meerkle_textarea.value = text_string;

	let str = `font-size: ${meerkle_size};letter-spacing: ${meerkle_spacing}rem;`;
	meerkle_textarea.setAttribute("style", str);
	
}

for (button of meerkle_buttons) {
	button.addEventListener("click", meerkle_button_click);
}

function meerkle_button_click(event) {
	let char = event.target.innerText;
	console.log(char);
	romankle_textarea.value = romankle_textarea.value.concat(char);
	meerkle_textarea.value = meerkle_textarea.value.concat(char);
}

romankle_textarea.addEventListener("input", (event) => {text_string =  romankle_textarea.value; update_textareas})
meerkle_textarea.addEventListener("input", (event) => {text_string =  meerkle_textarea.value; update_textareas})