let canvas;
let next;

let citation;
let chaincctvs;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	citation = select('#citation');
	citation.style('font-family', 'courier');
	citation.style('background-color', 'rgba(255, 255, 255, 0.7)');

	chaincctvs = select('#chaincctvs');
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);
}