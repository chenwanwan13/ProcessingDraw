SPACER = 50
COLORS1 = [color(208,16,76),color(232,122,144),color(248,195,205),color(244,167,185),color(181,73,91)]#pink
COLORS2 = [color(240,94,28),color(251,153,102),color(237,120,74),color(233,139,42),color(231,148,96)]#orange
COLORS3 = [color(145,180,147),color(123,162,63),color(202,173,95),color(173,161,66),color(190,194,63)]#green
COLORS4 = [color(51,103,116),color(165,222,228),color(51,166,184),color(58,143,183),color(120,194,196)]#blue

bg1 = color(221,106,102)
bg2 = color(251,190,110)
bg3 = color(34,125,81)
bg4 = color(88,178,190)

def setup():
    size(800,800)

def draw():
    #generate static random values
    background(bg4)    
    randomSeed(0)
    for x in range(0, width, SPACER):
        for y in range(0, height, SPACER):
            noStroke()
            colorX = COLORS4[int(random(len(COLORS4)))]
            for i in range(0,int(random(1,5)),1):
                 delta = random(-5,5)
                 fill(colorX,random(10,150))
                 rect(x+delta, y+delta, 50, 50)
