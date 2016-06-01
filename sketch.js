/*	First experiment with P5
	Falling squares	*/

var squaresArray = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	for(var i=0; i<=50; i++){
		var s = new FallingSquare();
		squaresArray.push(s);
	}
}

function draw() {
	background(0);
	fill(0, 100, 0);

	squaresArray.forEach(function(square) {
		fill(square.color);
		rect(square.x, square.y, square.width, square.height);
		square.move();
	});
}



function FallingSquare() {
	this.y = random(0, window.innerHeight);
	this.x = random(0, window.innerWidth);
	this.width = 30;
	this.height = 30;
	this.color = color(0,200,0);

	this.move = function() {
		(this.y >= window.innerHeight ? this.y = -30 : this.y += 3);
	}
}