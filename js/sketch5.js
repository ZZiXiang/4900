let img;
let a=255;
let trigger=false;


function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);  
}
  
      
function setup() {
canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
  
  img=loadImage("Untitled-1.png");
  noStroke();
//  img.delay(100);
}

function draw() {
  fill(color(0,0,0,a));
  //rect(mouseX-80, mouseY-50, 150, 120);
  // if(trigger==true){
  //   a--;
  // }
    
}

function mousePressed(){
  // trigger= true;
    //background(255);

  
  image(img, mouseX-80, mouseY-40); 
  
 
}