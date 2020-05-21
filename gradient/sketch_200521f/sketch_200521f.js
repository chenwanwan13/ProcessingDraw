let palette = ["#68728c","#74a7a4","#dd8977","#88d8b0","#edc690","f3e2b8"];

function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(251);
  colorMode(RGB);
  noStroke();
  let b1 = color(250,250,250,10);
  let b2 = color(50,50,50,20);
  let s = 500;  
  let intensity = 20;

  let rl1;
  let rl2;
  for(let i=width-s;i>10;i-=5){
    //rl = random(10,20)*0.1;
    rl1 = randomGaussian(150,50)*0.005;
    rl2 = randomGaussian(150,50)*0.005;
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    //rect(rl*i+s, 0, s+rl*(i+2), height);
    //stroke(1);
    fill(interA);
    beginShape();  
    //bezier(s+rl1*30, 0, s+i*rl1, height*0.333, s+i*rl2, height*0.666, s+rl2*30, height);
    endShape();
    fill(b2);
    beginShape();  
    vertex(0, 0);
    vertex(s+rl1*30, 0);
    line(s+rl1*30, 0, s+i*rl2, height*0.333);
    bezierVertex(s+i*rl1, height*rl1*0.333, s+i*rl2, height*rl2*0.666, s+rl2*30, height);    
    line(s+i*rl2, height*0.666, s, height);
    vertex(s+rl2*30, height);
    vertex(0, height);
    endShape();
  }
}

function SetGradient(start_pos, gradient_speed, r_length){

}

function mousePressed(){
  save('pix.jpg');
}
