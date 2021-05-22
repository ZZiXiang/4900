let xpo;
let ypo;

function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
 // createCanvas(400, 400);
  angleMode(DEGREES);

  noStroke();

}

function drawC(){
  circle(xpo,ypo, 30);
}

function draw1(){
   ellipse(xpo, ypo-50, 20, 40);
}

function draw3(){
   ellipse(xpo+50, ypo, 40, 20);
}

function draw5(){
   ellipse(xpo, ypo+50, 20, 40);
}

function draw7(){
   ellipse(xpo-50, ypo, 40, 20);
}

function draw2(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(0, -50, 20, 40);
  pop();
}


function draw4(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(50,0,40,20);
  pop();
}
function draw6(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(0, 50, 20, 40);
  pop();
}
function draw8(){
  push();
  translate(xpo,ypo);
  rotate(45);
  ellipse(-50,0,40,20);
  pop();
}

// function drawF(){

//   circle(100,150, 30);
//   ellipse(100, 100, 20, 40);
//   ellipse(100, 200, 20, 40);
//   ellipse(50,150,40,20);
//   ellipse(150,150,40,20);
  
//   push();
//   translate(100,150);
//   rotate(45);
//   ellipse(0, -50, 20, 40);
//   ellipse(0, 50, 20, 40);
//   ellipse(-50,0,40,20);
//   ellipse(50,0,40,20);
//   rotate(315);
//   ellipse(0, -50, 20, 40);
//   ellipse(0, 50, 20, 40);
//   ellipse(-50,0,40,20);
//   ellipse(50,0,40,20);
//   pop();
// }

function draw() {
  fill(color(random(0,255),random(0,255),random(0,255)));
  
  //background(220);
  
}

function mousePressed(){
  xpo=mouseX;
  ypo=mouseY;
  //clear();
    setTimeout(drawC, 200);
    setTimeout(draw1, 400);
    setTimeout(draw2, 600);
    setTimeout(draw3, 800);
    setTimeout(draw4, 1000);
    setTimeout(draw5, 1200);
    setTimeout(draw6, 1400);
    setTimeout(draw7, 1600);
    setTimeout(draw8, 1800);
  
}

function keyPressed(){
  clear();
}
