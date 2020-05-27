var circle = 200;
var rot;
var col;
var freq = 0.000005; 
var cont = 0;
var r;
let palette = ["#d8e2e9","#9fb8c9","#ebf0f4","#c5d4de","#9fb8c9","#8caabe"];

function setup() {
  createCanvas(800, 800);
  
}

function bgGradient(){
  //let b1 = color(116,96,97);
  //let b2 = color(32,30,43);
  let b2 = color(14,47,68);
  let b1 = color(158,171,180);
  for(let k=0;k<height;k++){
    let interA = lerpColor(b1, b2, 1-k/height);
    stroke(interA);
    line(0,k,width,k);
  }
}
function draw() {
  bgGradient();
  translate(400, 400);
  rotate(radians(rot));

 ellipseMode(RADIUS);
  for (var i=0; i<200; i ++) {
    circle= 200 + 20*sin(millis()*i*freq);
    col=map(circle,150,250,255,60);
    r=map(circle,150,250,115,2);
    fill(random(palette));
    //fill(col);
    noStroke();
    //ellipse(circle*cos(i), circle*sin(i),r,r);    
    ellipse(sin(i)*i, cos(i)*i,r,r);    
    rot=rot+0.00005;
  }
}
