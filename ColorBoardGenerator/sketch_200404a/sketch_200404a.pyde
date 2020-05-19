SPACER = 100
bg1 = color(221,106,102)
bg2 = color(251,190,110)
COLORS1 = [#color palettes
           color(63,127,184),
           color(82,139,191),
           color(101,152,198),
           color(120,165,205),
           color(139,178,212),
           color(255,134,178)
           ]

def setup():
    size(800,800)

def draw():
    #generate static random values
    background(bg1)    
    randomSeed(0)
    for x in range(0, width, SPACER):
        for y in range(0, height, SPACER):
            noStroke()  
            if(x/SPACER<len(COLORS1)):
                colorX = COLORS1[x/SPACER]
                fill(colorX)
                rect(x, y, SPACER, SPACER)
            else:
                colorX = color(256,256,256)
                fill(colorX)
                rect(x, y, SPACER, SPACER)
