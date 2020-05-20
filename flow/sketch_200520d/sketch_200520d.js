let palette = ["#68728c","#74a7a4","#dd8977","#88d8b0","#edc690","f3e2b8"];

function setup() {
  createCanvas(800, 300);
  background("#ffeead");
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

function draw() {
  noLoop();
  let angles = [];
  let lwidth = 20;
  let xnum = 20;
  CreateGrid(xnum,xnum,lwidth, angles);
  image(bg, 0, 0);
}

function CreateGrid(m, n, lwidth, angles){
  let xscale = width/m;
  strokeWeight(0.3);
  for(let i=1;i<m;i++){
    angles[i]=[];
    for(let j=1;j<n;j++){
      let angle=(j/n)*PI;
      angles[i][j]=angle;
      //line(i*xscale, j*xscale,i*xscale+lwidth*cos(angle), j*xscale+lwidth*sin(angle));
    }
  }
  randomLIines(100,1000,random(2),random(1),20); 
}

function randomLIines(A, B, scatter, sw, dt){
  for(let w=1;w<A;w++){
    let x = random(width);
    let y = random(height);
    let d = dt;
    let col = color((palette[5-(w-1)%5]));
    stroke(col); 
    for(let u=0;u<B;u++){
      let a = random(TAU);
      let rnd = scatter;
      strokeWeight(sw);
      //noiseLine(x+d*rnd*0.5*cos(a), y+d*rnd*0.5*sin(a), random(10), 0.001);
      noiseLine(x+d*rnd*0.5*cos(a), y+d*rnd*0.5*sin(a), 0.001, 0.001, 20, 3, 150);
    }
  }
}

function noiseLine(x, y, ns_X, ns_Y, step_num, step_len, curve_scale) {
  let c = step_num;
  let px = x;
  let py = y;
  for (let i = 0; i < c; i++) {
    let ns1 = ns_X;
    let ns2 = ns_Y;
    let angle = noise(x * ns1, y *ns2, i*0.0001)*curve_scale;
    line(x, y, px, py);
    px = x;
    py = y;
    x += cos(angle)*step_len;
    y += sin(angle)*step_len;
  }
}

function mousePressed(){
  save('pix.jpg');
}
