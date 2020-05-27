//let palette = ["#68728c","#74a7a4","#dd8977","#88d8b0","#edc690","f3e2b8"];
//let palette = ["#FFFDF4"];
let palette = ["#d8e2e9","#9fb8c9","#ebf0f4","#c5d4de","#9fb8c9","#8caabe"];

bubbles = [];

function setup() {
  createCanvas(800, 360);
  background(100);
  bgGradient(); 
}

function draw() {
  bubbles.push(new bubble(random(width), height));
  for(let j = bubbles.length-1 ; j>-1; j--){
    let currentBubble = bubbles[j];
    currentBubble.update();
    currentBubble.show();
    if (currentBubble.isDead()) {
        bubbles.pop(j);
    }
  }
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

class bubble {  
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(1);
    this.lifespan = 120;
    let acc = p5.Vector.random2D();
  }
  
  run(){
    update();
    display();
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 1;
  }
  
  show(){
    noStroke();
    fill(random(palette));
    for(let m = 0;m<random(1);m++){
      ellipse(this.pos.x,this.pos.y,random(3));
    }
  }  
  
  isDead() {
    if (this.lifespan <= 0.0) {
      return true;
    }
  }
}
