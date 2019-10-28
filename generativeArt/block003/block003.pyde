def setup():
    size(500,500,P3D)
    frameRate(60);
    
def draw():
    
    totalFrames=24*3
    t = frameCount/totalFrames
    randomSeed(2)
    #background(254,223,225)
    background(1)
    perspective(0.5,1,0.01,100)
    camera(
        0,0,40,
        0,0,0,
        0,1,0
    )
    rotateX(-0.5 + sin(PI * 4 * t) * 0.05)
    rotateY(-0.5 + sin(PI * 2 * t) * 0.1)
    
    columns=3
    offs=0.5*columns-0.5
    translate(-offs,3,-offs)
    
    dy1=0
    dy2=0
    for ix in range(0,columns):
        for iy in range(0,columns):
            pushMatrix()
            translate(ix,0,iy)
            translate(ix,0,iy)
            w=1
            h=1
            #noStroke()
            stroke(241,148,131)
            col=color(227,145,110)
            t =frameCount/2
            for i in range(1,100):
                drawUnit(w,h,t)
                t = sqrt(t)
                
            popMatrix()
            
def drawUnit(w,h,t):
    #if(lv >= maxLv): return
    #translate(0,random(-10+0.8*t,-10+0.8*t+10),0)
    translate(0,-10+0.8*1,0)
    fill(random(235),random(122),random(119)) 
    box(w,h,w)
