COLORS1 = [color(208,16,76),color(232,122,144),color(248,195,205),color(244,167,185),color(181,73,91)]#pink

def setup():
    size(400,400,P3D)

def draw():
    cube = createShape(BOX, 1, 1, 1)
    col = 7
    totalFrames = 64
    time = 1.0/totalFrames*frameCount
    
    background(0)
    
    perspective(0.5,1,0.01,100)
    
    camera(
        0, 0, 40,
        0, 2, 0,
        0, 1, 0
    )
    
    rotateX(-0.6)
    rotateY(-0.8)
    
    id = 0
    for ix in range(0,col):
        x = (ix - 0.5 * col + 0.5) * 1.5
        for iy in range(0,col):
            y = (iy - 0.5 * col + 0.5) * 1.5
            for iz in range(0,col):
                d = sqrt(x * x + y * y)
                z = iz*1.2 + sin(d * 0.45 + time * 4 * PI)
                #z = z * z * z * 2;
    
                stroke(150,150,150)
                s = abs(((id*PI/17+time*4)%2)-1)
                        
                pushMatrix()
                translate(x, z, y)
                noStroke()
                fill(lerp(165, 129, s), lerp(222, 199, s), lerp(228,212, s), 100)
                sphere(s/2)
                fill(lerp(165, 129, s), lerp(222, 199, s), lerp(228,212, s), 100)
                box(s,s,s)
                popMatrix()
                
                id+=1
            
    if (frameCount <= totalFrames):
        saveFrame()
