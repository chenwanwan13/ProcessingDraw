let palette = ["#96ceb4","#ffeead","#ff6f69","#ffcc5c","#88d8b0"];
let bg;

function setup(){
  createCanvas(1112, 834);
  noLoop();
  let sep = 4;
  bg = createGraphics(width, height);
  bg.noFill();
  bg.stroke(255, 35);
  bg.strokeWeight(0.5);
  for (let i = 0; i < width; i+=sep) {
    for (let j = 0; j < height; j+=sep) {
      bg.rect(i, j, sep, sep);
    }
  }
}

function draw(){
  background(random(palette));
  for(let i=0; i<1000; i++){
    let x = random(width);
    let y = random(height);
    let d = 50;
    let col = color(random(palette));
    stroke(col);
    for(let j=0; j<50; j++){
      let rnd = random(1);
      let a = random(TAU);
      strokeWeight(random(2));
      noiseLine(x+d*rnd*0.5*cos(a), y+d*rnd*0.5*sin(a));
    }
  }
  image(bg, 0, 0);
}

function noiseLine(x, y) {
  let c = 10;
  let px = x;
  let py = y;
  for (let i = 0; i < c; i++) {
    let ns = 0.001;
    let angle = noise(x * ns, y * ns, i * 0.0001) * 20;
    line(x, y, px, py);
    px = x;
    py = y;
    x += cos(angle) * 10;
    y += sin(angle) * 10;
  }
}

function mousePressed(){
  save('pix.jpg');
}
