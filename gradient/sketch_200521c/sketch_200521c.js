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
  let s = 400;  
  fill(b2);
  rect(0, 0, s, height);
  
  let rl;
  for(let i=0;i<(width-s);i++){
    //rl = random(10,20)*0.1;
    rl = randomGaussian(50,5)*0.02;
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    fill(interA);
    rect(rl*i+s, 0, s+rl*(i+2), height);
  }
}

function SetGradient(start_pos, gradient_speed, r_length){

}

function mousePressed(){
  save('pix.jpg');
}
