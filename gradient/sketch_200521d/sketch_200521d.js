function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(251);
  colorMode(RGB);
  noStroke();
  let b1 = color(250,250,250,20);
  let b2 = color(50);
  let s = 500;  
  let intensity = 20;

  let rl1;
  let rl2;
  for(let i=width-s;i>0;i-=1){
    //rl = random(10,20)*0.1;
    rl1 = randomGaussian(1,200)*0.002;
    rl2 = randomGaussian(1,200)*0.002;
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    //rect(rl*i+s, 0, s+rl*(i+2), height);
    //stroke(1);
    fill(interA);
    beginShape();
    vertex(s, 0);
    vertex(s+i*rl1, 0);
    vertex(s+i*rl2, height);
    vertex(s, height);
    endShape();
    
    fill(b2);
    rect(0, 0, s, height);
  }
}

function SetGradient(start_pos, gradient_speed, r_length){

}

function mousePressed(){
  save('pix.jpg');
}
