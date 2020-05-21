function setup() {
  createCanvas(800, 400);
  noLoop();
}


function draw() {
  background(251);
  colorMode(RGB);
  noStroke();
  let b1 = color(255);
  let b2 = color(0);
  let s = 600;  
  fill(b2);
  rect(0, 0, s, height);
  for(let i=0;i<(width-s);i++){
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    fill(interA);
    rect(1*i+s, 0, s+1*(i+2), height);
  }
}

function SetGradient(start_pos, gradient_speed){

}

function mousePressed(){
  save('pix.jpg');
}
