points = []

def setup():
    size(500,500)

def draw():
    background(254,223,225)
   
    fill(232,122,144)
    drawPoly(width/2, height/2, width/3, 6)


    
def drawPoly(x, y, r, nsides):
    
    noStroke()
    beginShape()
    for a in range(0, nsides):
        sx = x + cos(a) * r;
        sy = y + sin(a) * r;
        points.append(vertex(sx, sy))
        print(sx,sy)
    endShape(CLOSE)
    return points


def deform(points, depth, variance, vdiv):
    sx1,sx2,sy1,sy2 = 0
    for i in range(0,6):
        sx1 = sx
