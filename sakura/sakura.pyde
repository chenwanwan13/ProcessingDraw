
def setup():
    size(640, 360)
    global img01,img02,img03
    img01 = loadImage("sakura_card01.png")    # Load the image into the program
    img02 = loadImage("sakura_card02.png")    # Load the image into the program
    img03 = loadImage("sakura_card03.png")    # Load the image into the program
    noLoop()
    
def draw():
    image(img02, width/2-20, height / 2, img01.width * 2, img01.height * 2)
    image(img01, width/2, height / 2, img01.width * 2, img01.height * 2)
    image(img03, width/2+20, height / 2, img01.width * 2, img01.height * 2)
