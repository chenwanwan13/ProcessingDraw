import gifAnimation.*;
import processing.opengl.*;

GifMaker gifExport;

float x = 1.88;
PShape s;

void setup()
{
  size(520, 520, OPENGL);
  frameRate(100);
  smooth(8);
  s = createShape(); 
  s.beginShape(); 
  s.fill(208,16,76);
  s.noStroke();
  s.vertex(0, 75); 
  s.bezierVertex(0, -10, 200, 25, 0, 200); 
  s.vertex(0, 75); 
  s.bezierVertex(0, -10, -200, 25, 0, 200); 
  s.endShape(CLOSE);
  
  gifExport = new GifMaker(this, "heartbeat.gif");
  gifExport.setRepeat(0);
}

void draw()
{
  background(254,223,225);
  shapeMode(CENTER); 
  translate(width/2, height/2);
  stroke(238,169,169);
   x = x+0.08;
  scale((0.9 + abs(cos(x)))*0.5);
  shape(s,90,-50);
  gifExport.setDelay(1000/60);
  gifExport.addFrame();
}

void keyPressed() {
  gifExport.finish();
  println("gif saved");
}