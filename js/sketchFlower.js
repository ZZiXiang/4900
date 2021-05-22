var speed= new Array (1,-1);
var cr=[];
var cg=[];
var cb=[];
var xpo=[];
var ypo=[];
var speedx=[];
var speedy=[];
var state=[];
var counter =0;
var MAX=9;
var diameter=50;
var x=1;
var moveAll=false;
var pick = new Array(10,-10);
var winW=800;
var winH=800;
var move1= [];
var move2= [];
var countTrue; // for checking not close tog
function windowResized(){
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
  canvas.style('z-index','-1'); //sit in the back
  
  angleMode(DEGREES);
  textSize(30);

  cr=new Array(                random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255) );
    cg=new Array(                random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255) );
    cb=new Array(                random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255),
                               random(100,255),random(100,255),random(100,255) );
    speedx= new Array( random(pick),random(pick),random(pick),
                      random(pick),random(pick),random(pick),
                      random(pick),random(pick),random(pick)
                      );
      speedy= new Array( random(pick),random(pick),random(pick),
                      random(pick),random(pick),random(pick),
                      random(pick),random(pick),random(pick)
                      );
  //move1 = new Array( -20, -20);
  
  fill(30,30,30);
}

function draw() {
   
  

  
  background('#FFCC99');
  // text("HIT ENTER KET", 30, 30);
  
  // text(counter, 10, 50);
  // text(countTrue, 10, 70);
  // draw the circle
  for(var i=0; i<MAX; i++){
    if(state[i]==1){
        //leaf 1
        fill(cr[i],cg[i],cb[i]);
         ellipse(xpo[i], ypo[i]-50+move1[i], 20, 40);
        line(xpo[i],ypo[i]-60+move1[i],xpo[i],ypo[i]-40+move1[i]);
      
        //leaf 3
        fill(cg[i],cr[i],cb[i]);
         ellipse(xpo[i]+50-move1[i], ypo[i], 40, 20);
        line(xpo[i]+40-move1[i],ypo[i],xpo[i]+60-move1[i],ypo[i]);
      
        //leaf 5
       fill(cb[i],cg[i],cr[i]);
       ellipse(xpo[i], ypo[i]+50-move1[i], 20, 40);
        line(xpo[i],ypo[i]+60-move1[i],xpo[i],ypo[i]+40-move1[i]);
         
      //leaf 7
        fill(cr[i], cb[i], cg[i]);
         ellipse(xpo[i]-50+move1[i], ypo[i], 40, 20);
       line(xpo[i]-40+move1[i],ypo[i],xpo[i]-60+move1[i],ypo[i]);
      
      //leaf 2
       fill(cg[i], cb[i], cr[i]);
        push();
        translate(xpo[i],ypo[i]);
        rotate(45);
        ellipse(0, -50+move1[i], 20, 40);
        pop();
        line(xpo[i]+43-move1[i],ypo[i]-43+move1[i],xpo[i]+28-move1[i],ypo[i]-28+move1[i]);
         
      //leaf 4
      fill(cb[i],cr[i],cg[i]);
        push();
        translate(xpo[i],ypo[i]);
        rotate(45);
        ellipse(50-move1[i],0,40,20);
        pop();
        line(xpo[i]+43-move1[i],ypo[i]+43-move1[i],xpo[i]+28-move1[i],ypo[i]+28-move1[i]);
      
      //leaf 6
        fill(cr[i]+20,cg[i]/2,cb[i]/2);
        push();
        translate(xpo[i],ypo[i]);
        rotate(45);
        ellipse(0, 50-move1[i], 20, 40);
        pop();
        line(xpo[i]-43+move1[i],ypo[i]+43-move1[i],xpo[i]-28+move1[i],ypo[i]+28-move1[i]);
      
      //leaf 8
        fill(cr[i],cg[i]+30,cb[i]/2);
        push();
        translate(xpo[i],ypo[i]);
        rotate(45);
        ellipse(-50+move1[i],0,40,20);
        pop();
        line(xpo[i]-43+move1[i],ypo[i]-43+move1[i],xpo[i]-28+move1[i],ypo[i]-28+move1[i]);
      
      //center
        fill(cr[i],cr[i],cb[i]);
        circle(xpo[i],ypo[i], 50);
        stroke("white");
        line(xpo[i]-10,ypo[i]-10,xpo[i]+10,ypo[i]-10);
        line(xpo[i]-10,ypo[i]+12,xpo[i]+10,ypo[i]+12);
        line(xpo[i]+10,ypo[i]-10,xpo[i]-10,ypo[i]+12);

    }
    
  }
  
  
  //move
  if(moveAll==true){
    for(var j=0; j< MAX; j++){
      xpo[j]+=speedx[j];
      ypo[j]-=speedy[j];
    }
  }
  
  //collide with the wall
  for(var k=0; k< MAX; k++){
    if(xpo[k]<=0 || xpo[k]>=windowWidth){
      speedx[k]*=-1;
    }
    if(ypo[k]<=0 || ypo[k]>=windowHeight){
      speedy[k]*=-1;
    }
  }
  //collison
  for(var l=0; l< MAX; l++){
    for(var m=l+1; m<MAX; m++){
      if( dist(xpo[l],ypo[l],xpo[m], ypo[m]) <= 80){
         xpo[l]*=-1;
         ypo[l]*=-1;
         xpo[m]*=-1;
         ypo[m]*=-1;
      }
    }
  }

  for(var z=0; z<MAX; z++){  
  if(move1[z]>0){
    move1[z]-=0.5;
    }
  if(move2[z]>0){
    move2[z]-=0.5;
  }
  if(speedy[z]!=3 && speedy[z]!=-3){
    if(speedy[z]>3){
      speedy[z]-=2;
    }
    if(speedy[z]<3){
      speedy[z]+2;
    }
  }
    
    if(speedx[z]!=3 && speedx[z]!=-3){
    if(speedx[z]>3){
      speedx[z]-=0.5;
    }
    if(speedx[z]<3){
      speedx[z]+0.5;
    }
  }
    
  }
  


}

function mousePressed(){

    for(var q=0; q<counter; q++){
    if(dist(mouseX,mouseY,xpo[q],ypo[q])<=100){
      exit();
    }
  }
  
  if(moveAll==false){
  xpo[counter]=mouseX;
  ypo[counter]=mouseY;
  state[counter]=1;
        move1[counter]=30;
        move2[counter]=30;
        
  counter++;

  }
}

function keyPressed(){
  if( keyCode=== RETURN){
    moveAll=true;
  }
  
}

