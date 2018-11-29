final int DIVISOR = 2;

PImage img;
float x = 0.28;
PShape s;

void setup()
{
  img = loadImage("1.jpg");
  size(520, 800, P3D);
  smooth(10);
  frameRate(30);

  s = createShape(); 
  s.beginShape(); 
  s.fill(255,0,0);
  s.noStroke();
  s.vertex(0, 75); 
  s.bezierVertex(0, -10, 200, 25, 0, 200); 
  s.vertex(0, 75); 
  s.bezierVertex(0, -10, -200, 25, 0, 200); 
  s.endShape(CLOSE);
}

void draw()
{
  image(img, 0, 0);
  noStroke();
  shapeMode(CENTER);
  ellipseMode(CENTER);
  translate(width/2, height/2);

  x = x+0.08;
  scale(0.5 + abs(cos(x)));
  shape(s, 90, -50);

}