let canvas;
let next;

let citation;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	citation = select('#citation');
	citation.style('font-size', '1.5em');
	citation.style('font-family', 'courier');
	citation.style('position', 'absolute');
	citation.style('top', '50%');
	citation.style('left', '50%');
	citation.style('transform', 'translate(-50%,-50%');
	citation.style('background-color', 'rgba(255, 255, 255, 0.7)');
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);
}