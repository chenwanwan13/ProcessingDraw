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
  for(let i=0;i<width;i++){
    let interA = lerpColor(b1, b2, 1-i/width);
    fill(interA);
    rect(1*i, 0, 1*i+20, height);
  }
}

function SetGradient(){

}

function mousePressed(){
  save('pix.jpg');
}
