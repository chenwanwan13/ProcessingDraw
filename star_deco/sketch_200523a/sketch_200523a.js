let awsl = ["#F8FBD3","f1f7a4","fcfdea"];
let linesC = []

function setup() {
  createCanvas(1600, 900);
  noLoop();
}

function draw() {
  background(80,64,67);

  bgGradient(); 
  drawWish();
  drawFStar();
  drawDust();
}

function drawWish(){
  let num = 13;
  let step = width/num;
  for(let i=0;i<width;i+=step){
    stroke(228,203,162);
    let pos = randomGaussian(100,50)*0.01;
    let len = pos*80+10;
    line(i*pos+30,0,i*pos+30,len);
    star(i*pos+30, len, 5, 13, 5, random(awsl)); 
    star(i*pos+30, len, 5, 13, 5, random(awsl)); 
  }
}

function star(x, y, radius1, radius2, npoints, col) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle/2.0;
  beginShape();
  noStroke();
  radius1 = random(2,radius1);
  radius2 = random(9,radius2);
  fill(col);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
    //rotate(PI/random(3));
    //resetMatrix();
    endShape(CLOSE);
}

function bgGradient(){
  let b1 = color(116,96,97);
  let b2 = color(32,30,43);
  for(let k=0;k<height;k++){
    let interA = lerpColor(b1, b2, 1-k/height);
    stroke(interA);
    line(0,k,width,k);
  }
}

function drawDust(){
  let b1 = color(225,120);
  let b2 = color(255,220);
  noStroke();
  let num = 6000;
  let step = width/num;
  for(let k=0;k<num;k+=step){
    let interA = lerpColor(b1, b2, k/height);
    let pos = randomGaussian(150,500)*0.002;
    let w = random(4)*0.8;
    fill(interA);
    rect(k*pos*5,height+10-pos*120,w,w);
  }
}


function drawFStar(){
  let b1 = color(255,255,255);
  let b2 = color(244,251,255);
  noStroke();
  let num = 150;
  let step = width/num;
  for(let k=10;k<num;k+=step){
    let interA = lerpColor(b1, b2, k/width);
    let pos = randomGaussian(150,500)*0.002;
    star(k*pos*50, height-20-pos*250, 2, 9, 4, interA); 
  }
}
