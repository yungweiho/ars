function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	// let bgR = random(0,0.5)
	background(0)
	// text(mouseX, 10, 10)
	translate(width/2, height/2)
	// rotate(frameCount/1000*PI)
	cle()
	// ellipse(mouseX, mouseY, 20, 20);
	// let an = random(-2,2)
	// background(0,0,0, 0.5);

	if(mouseX>width/2-250 && mouseX<width/2 + 250 && mouseY > height/2-250 && mouseY < height/2 + 250) {
		// line(mouseX - width/2, mouseY - height/2, 100*cos(an*PI), 100*sin(an*PI))
		for(var i = 0; i < 2*PI; i += 0.005*PI) {
			line(mouseX - width/2, mouseY - height/2, 250*cos(i), 250*sin(i))
		}
	} else {
		// line(0, 0, 100*cos(an*PI), 100*sin(an*PI))
		for(var i = 0; i < 2*PI; i += 0.005*PI) {
			line(0, 0, 250*cos(i), 250*sin(i))
		}
	}

}

function cle() {
	noFill()
	stroke("#d152f7")
	ellipse(0,0,500)
}