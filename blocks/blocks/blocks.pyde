SPACER = 50
COLORS = [color(208,16,76),color(232,122,144),color(248,195,205),color(244,167,185),color(181,73,91)]
bg = color(111,51,129,1)
def setup():
    size(400,400)

def draw():
    #generate static random values
    background(bg)    
    randomSeed(0)
    for x in range(0, width, SPACER):
        for y in range(0, height, SPACER):
            noStroke()
            colorX = COLORS[int(random(len(COLORS)))]
            for i in range(0,int(random(0,3)),1):
                 delta = random(-3,3)
                 fill(colorX,random(50,180))
                 rect(x+delta, y+delta, 50, 50)
