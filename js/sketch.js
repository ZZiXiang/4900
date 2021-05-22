var canvas;
var xpo, ypo;


function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);  
}
  
function setup() {
  canvas = createCanvas(windowWidth, 1500);
  canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
}

function draw() {
	noStroke();
	background(255,229,204,5);
 	fill('#FFFFFF');
	circle(xpo, ypo, random(100));

	for(p=0; p<100; p+=100){
		circle(random(windowWidth), random(1500), random(70));
	}

  // if(mouseIsPressed){
  //  line(pmouseX, pmouseY, mouseX, mouseY)

  // } 
  
  
}

function mousePressed(){
  xpo = mouseX;
  ypo = mouseY;
}