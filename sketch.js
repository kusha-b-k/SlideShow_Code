var slide_array=[];
var presscount=1;

function preload() {
    slide_array[1]=loadImage("assets/a.svg");
    slide_array[2]=loadImage("assets/b.svg");
    slide_array[3]=loadImage("assets/c.svg");
    slide_array[4]=loadImage("assets/d.svg");
    slide_array[5]=loadImage("assets/e.svg");
    slide_array[6]=loadImage("assets/f.svg");
    slide_array[7]=loadImage("assets/g.svg");
    slide_array[8]=loadImage("assets/h.svg");
    slide_array[9]=loadImage("assets/i.svg");
    slide_array[10]=loadImage("assets/j.svg");
    
}
function setup() {
  createCanvas(displayWidth,displayHeight);
}  

function draw() {
   image(slide_array[presscount],100,0);
}

function mousePressed(){
 if(presscount==10)
 {
  presscount=0;
 }
presscount++;
clear();
}




