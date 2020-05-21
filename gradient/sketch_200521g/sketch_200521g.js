let palette1 = ["#e54f85","#f9a17f","#f4c453","#6ab861","#44a582"];
let palette = ["#dbeaca","#bbdba7","#a2ddac","#8cd0ac","#63c19d"];//green

function setup() {
  createCanvas(800, 400);
  noLoop();
  frameRate(11);
}

function draw() {
  background(251);
  colorMode(RGB);
  noStroke();
  let b1 = color(250,250,250,10);
  let b2 = color(50,50,50,120);
  let s = 600;  
  let intensity = 20;

  let rl1;
  let rl2;
  for(let i=1;i<115000;i++){
    //rl = random(10,20)*0.1;
    rl1 = randomGaussian(150,80)*0.002;
    rl2 = randomGaussian(150,50)*0.002;
    let interA = lerpColor(b1, b2, 1-i/(width-s));
    //rect(rl*i+s, 0, s+rl*(i+2), height);
    //stroke(1);
    //fill(interA);
    fill(b2);
    beginShape();  
    //vertex(0, 0);
    //vertex(s+rl1*30, 0);
    //line(s+rl1*30, 0, s+i*rl2, height*0.333);
    //bezierVertex(s+i*rl1, height*rl1*0.333, s+i*rl2, height*rl2*0.666, s+rl2*30, height);    
    //line(s+i*rl2, height*0.666, s, height);
    //vertex(s+rl2*30, height);
    //vertex(0, height);
    endShape();
    
    let x=(rl1*1200-s);
    let y=rl2+random(height);
    let w = random(3);
    rect(x,y,w,w);
    
    
  }
}

function SetGradient(start_pos, gradient_speed, r_length){

}

function mousePressed(){
  save('pix.jpg');
}
