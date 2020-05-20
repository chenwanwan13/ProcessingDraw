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
  let angles = [];
  stroke(51);
  for(let i=1;i<m;i++){
    angles[i]=[];
    for(let j=1;j<n;j++){
      let angle=(j/n)*PI;
      angles[i][j]=angle;
      line(i*xscale, j*xscale,i*xscale+lwidth*cos(angle), j*xscale+lwidth)*sin(angle);
    }
  }
  
}
