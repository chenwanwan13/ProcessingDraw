function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(251);
  let num = 10;
  let step = width/num; 
  stroke(1);

  for(let i=0;i<width;i+=step){
    for(let j=0;j<height;j+=step){
      rect(i,j,i+step,j+step);
      line(i,j,i+step,j+step);
      line(i,j+step,i+step,j);
    }
  }
  
  //rect(0,0,width,height);
}

function mousePressed(){
  save('pix.jpg');
}
