var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

function setInitialValues() {
	color1.value = "#FF0000";
	color2.value = "#FFFF00";

	setGradient();
}

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function getRandomGradient() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
} 

function setRandomGradient(){
	color1.value = getRandomGradient();
	color2.value = getRandomGradient();

	setGradient();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

document.addEventListener('DOMContentLoaded', setInitialValues);

random.addEventListener('click', setRandomGradient);





