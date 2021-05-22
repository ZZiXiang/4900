var i, j , k, z;
var circles = [];
var n=60;
var dia=70;
var r1 = [];
var r2 = [];
var temp;
var cxpo = 400;
var cypo = 600;
var cLock = false;
var cOver = false;
var xOffset, yOffset;

var dxpo = 450;
var dypo= 50;
var dLock = false;
var dOver = false;
var song;
var song2;

var winH = 3000;


var xpo;
var ypo;

//for fsh
var leftTail,rightTail;
var headx, heady;
var enlarge=0;
var headD=20;
var currentX;
var currentY;
var bubble=false;
var speedy=1;
var MAX_NUM=200;
var circles=[];
var eatCount=0;
var flip=1;
var flipper=false;

function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, winH);  
}
  
      
function setup() {
    angleMode(DEGREES);

 // createCanvas(500, 700);
    canvas = createCanvas(windowWidth, winH);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
  
  // create arrays that give random postion of circles
  for(var ii=0; ii<n; ii++){
    r1[ii]=random(0+dia*2, windowWidth-dia*2);
    r2[ii]=random(0+dia*2, windowWidth-dia*2);
  }
  
  for(var jj=0; jj<n; jj++){
    for( var kk=jj+1; kk<n; kk++){
      if( dist(r1[jj],r2[jj], r1[kk], r2[kk]) <= dia ){
        r1[kk]=random(0+dia*2, winH-dia*2);
        r2[kk]=random(0+dia*2, winH-dia*2);
      }
    }
  }
       
  
  
  for(i=0; i<n; i++){
  circles.push(new cir(r1[i], r2[i], dia, random(255),random(255),random(255)));
  }
}

function draw() {


  
  stroke(255);

  background('#FFCC99');
  
  textSize(20);

  text("You Caught "+ eatCount + " food", 10, 30);
  
  //draw fish
  ellipse(mouseX,mouseY, 60+enlarge, 30+enlarge);
  
  
  if(leftTail==true){
   triangle(mouseX-30-enlarge/2, mouseY, mouseX-50-enlarge, mouseY+20+enlarge, mouseX-50-enlarge,mouseY-20-enlarge);
        circle(mouseX+20,mouseY,5);
    triangle(mouseX,mouseY,mouseX-10-enlarge/2, mouseY,mouseX-enlarge, mouseY-enlarge-20+flip);
  }
  if(rightTail==true){   
      triangle(mouseX+30+enlarge/2,mouseY,mouseX+50+enlarge,mouseY+20+enlarge,mouseX+50+enlarge,mouseY-20-enlarge);
      circle(mouseX-20,mouseY,5);
    triangle(mouseX+10+enlarge/2, mouseY,mouseX,mouseY,mouseX+enlarge, mouseY-enlarge-20+flip);
  }
  
  
  if(pmouseX>mouseX){
    rightTail=true;
    leftTail=false;
    headx=mouseX-20;
  }
  
  if(pmouseX<mouseX){
    rightTail=false;
    leftTail=true;
    headx=mouseX+20;
  }
  
  //draw bubble

    circle(currentX-30,currentY-=speedy,20,20);

  
  
  //yu Qi
  if(flipper==true){
    flip-=0.5;
    if(flip==0){
      flipper=false;
    }
  }
  
  if(flipper==false){
    flip+=0.5;
    if(flip==40){
      flipper=true;
    }
  }
    
  for(j=0; j<n; j++){
    fill(circles[j].f1, circles[j].f2, circles[j].f3, 50);
    circle(circles[j].xPo+circles[j].speedx,circles[j].yPo+circles[j].speedy, circles[j].d);
  }//draw all the circles

  
//handle collision
    for(m = 0; m<n; m++){
          if(  
            dist(mouseX,mouseY, circles[m].xPo, circles[m].yPo)  
            <=(headD/2+circles[m].d/2)
                  ){    

            circles[m].xPo*=-1;
            circles[m].yPo*=-1;
            enlarge+=2;
            eatCount++;
            // temp=circles[m].f1;
            // circles[m].f1=circles[l].f1;
            // circles[l].f1=temp;
            
            
          }          

        
    }

  
  
for(k=0; k<n; k++){
    circles[k].move();
  }
  

  
}

class cir{
  constructor(x,y,z, f1,f2,f3){
    this.xPo=x;
    this.yPo=y;
    this.d=z;
    if(random(0,20)>=10){
      this.speedx= 2;
    }else{
      this.speedx=-2;
    }
    if(random(0,20)%2>=10){
    this.speedy= 2;
    }else{
      this.speedy=-2;
    }
        this.f1=f1;
        this.f2=f2;
        this.f3=f3;
  }

  move(){
    this.xPo+=this.speedx;
    this.yPo+=this.speedy;

    if(this.xPo<=0+dia/2 || this.xPo>=windowWidth-dia/2){
      this.speedx*=-1;
    }
    
    // if(this.yPo>50 && this.yPo<dypo){
    //   if(this.yPo<=50 || this.yPo>=dypo){
    //    this.speedy*=-1;
    //   }
    // }
    // if(this.yPo>dypo && this.yPo <500){
    //   if(this.yPo<=dypo || this.yPo>=500){
    //     this.speedy*=-1;
    //   }
    // }
//       if(this.yPo<=){
        
      
    if( this.yPo<=0+dia/2 || this.yPo>=winH-dia/2){
     this.speedy*=-1;
    }
  }
}



function mousePressed(){
  currentX=mouseX;
  currentY=mouseY;
  bubble=true;
}
