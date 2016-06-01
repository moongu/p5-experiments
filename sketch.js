/*	First experiment with P5
	Matrix rain	*/

var squaresArray = [];
var textArray = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	for(var i=0; i<50; i++){
		var t = new FallingText();
		textArray.push(t);
	}
}

function draw() {
	background(0);

	textArray.forEach(function(tx) {
		var green = 200;
		var yPos = tx.y;

		fill(0, green, 0);
		textSize(tx.fontSize);

		text(floor(random(0,2)).toString(), tx.x, tx.y);

		for(var i=0; i<=8; i++){
			fill(0, green-=20, 0);
			text(floor(random(0,2)).toString(), tx.x, yPos-=30);
		}

		tx.move();
	});
}

function FallingText() {
	this.y = random(0, window.innerHeight);
	this.x = random(0, window.innerWidth);
	this.fontSize = 30;
	this.clor = color(0,200,0);

	this.move = function() {
		(this.y >= (window.innerHeight + 30*9) ? this.y = -30 : this.y += 3);
	}
}