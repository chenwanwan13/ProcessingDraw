def setup():
    size(800,800)
    stroke(255)


def draw():
    background(179,220,222)
    translate(width/2,height/2)
    for a in range(0,360,3):
        x=random(50,150)
        y=random(150,350)
        pushMatrix()
        rotate(radians(a))
        strokeCap(ROUND)
        line(x,0,y,0)
        popMatrix()
        
