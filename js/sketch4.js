let img;
let a=255;



function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);  
}
  
      
function setup() {
canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
  
 img=loadImage("images/logo.png");
  noStroke();

}

// function setup() {
// createCanvas(400, 400);
// img=loadImage("Untitled-1.png");
// }

function draw() {
  background(255);
  fill(color(0,0,0,a));
  //rect(mouseX-80, mouseY-50, 150, 120);

    // if(mouseIsPressed){
    //   line(pmoseX,pmouseY,mouseX,mouseY);
    // }
    //rect(mouseX,mouseY,40,40);
　image(img,mouseX, mouseY);
}
// function mousePressed(){
// background(255);

 
// //image(img, mouseX-80, mouseY-40); 
// image(img, 0, 0); 
//   }
 
