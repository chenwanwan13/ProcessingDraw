let palette = ["#68728c","#74a7a4","#dd8977","#88d8b0","#edc690","f3e2b8"];

function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(251);
  colorMode(RGB);
  noStroke();
  //let b1 = color(250,250,250,20);
  //let b2 = color(50);
  let b1 = color(81,134,98,20);
  let b2 = color(255);
  let s = 0;  
  let intensity = 20;

  let rl1;
  let rl2;
  for(let i=width-s;i>0;i-=5){
    //rl = random(10,20)*0.1;
    rl1 = randomGaussian(100,20)*random(2)*0.002;
    rl2 = randomGaussian(100,20)*random(2)*0.002;
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    //rect(rl*i+s, 0, s+rl*(i+2), height);
    //stroke(1);
    fill(interA);
    beginShape();
    //vertex(0, 0);
    bezier(s, s, s+i*rl1, height*0.333, s+i*rl2, height*0.666, s, height);
    //vertex(s, 0);
    //vertex(s+i*rl1, 0);
    //vertex(s+i*rl2, height);
    //vertex(0, height);
    endShape();
    
    fill(b2);
    beginShape();

    endShape();
  }
}

function SetGradient(start_pos, gradient_speed, r_length){

}

function mousePressed(){
  save('pix.jpg');
}
