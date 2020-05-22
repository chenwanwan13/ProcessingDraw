function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(251);
  let num = 10;
  let step = width/num; 
  stroke(2);
  rect(0,0,width,height);
  for(let i=0;i<width;i+=step){
    line(0, i, width, i);
    line(i, 0, i, height);
    
    line(0, i, width, i+height);
    line(i, 0, i+width, height);
    
    line(0, i, i, 0);
    line(0, height+i, width, i);
  }
}

function mousePressed(){
  save('pix.jpg');
}
