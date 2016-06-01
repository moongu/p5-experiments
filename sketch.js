/*	First experiment with P5
	Matrix rain	*/

var textArray = [];
var trailLen = 10;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	for(var i=0; i<100; i++){
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

		for(var i=0; i<=trailLen; i++){
			fill(0, green-=20, 0);
			text(floor(random(0,2)).toString(), tx.x, yPos-=tx.fontSize);
		}

		tx.move();
	});
}

function FallingText() {
	this.y = random(0, window.innerHeight);
	this.x = random(0, window.innerWidth);
	this.fontSize = 30;
	this.speed = 3;

	this.move = function() {
		(this.y >= (window.innerHeight + this.fontSize*trailLen) ? 
			this.y = -this.fontSize : this.y += this.speed);
	}
}