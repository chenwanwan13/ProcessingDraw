function setup() {
  createCanvas(800, 800);
  background("#ffeead");
}

function draw() {
  CreateGrid(10,10);
}

function CreateGrid(m, n){
  let xscale = width/m;
  let lwidth = 10;
  stroke(51);
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      line(i*xscale, j*xscale,i*xscale+lwidth, j*xscale+lwidth);
    }
  }
  
}
