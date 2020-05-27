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
  drawText("awsl",100,200);
}

function drawText(txt, posx, posy){
  textSize(32);
  text(txt, posx, posy); 
  fill(255);
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
