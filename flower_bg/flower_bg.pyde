SPACER = 96
bg = color(123,144,210)
cb = color(178,143,206)

def setup():
    size(960,480)
    

def draw():
    background(bg)
    strokeWeight(10)
    stroke(cb)
    
    for x in range(-SPACER, width+SPACER, SPACER):    
        translate(x,30)
        line(x, 0, x+2*SPACER,height)
        line(x+SPACER, 0, x-SPACER, height)
