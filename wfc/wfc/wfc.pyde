from collections import Counter
from itertools import chain
from random import choice

w, h = 40, 25
N = 3

def setup():
    size(w*20, h*20, P2D)
    background('#FFFFFF')
    frameRate(1000)
    noStroke()

    global W, A, H, patterns, freqs, npat, mat, xs, ys

    img = loadImage('E:\HoudiniRepo\AlfxDungeon\map.png') 
    iw, ih = img.width, img.height
    xs, ys = width//w, height//h
    kernel = [[i + n*iw for i in xrange(N)] for n in xrange(N)]
    mat = ((-1, 0), (1, 0), (0, -1), (0, 1))
    all = []

    for y in xrange(ih):
        for x in xrange(iw):
            cmat = [[img.pixels[((x+n)%iw)+(((a[0]+iw*y)/iw)%ih)*iw] for n in a] for a in kernel]
            for r in xrange(4):
                cmat = zip(*cmat[::-1])
                all.append(cmat)
                all.append(cmat[::-1])
                all.append([a[::-1] for a in cmat])

    all = [tuple(chain.from_iterable(p)) for p in all] 
    c = Counter(all)
    patterns = c.keys()
    freqs = c.values()
    npat = len(freqs) 

    W = [set(range(npat)) for i in xrange(w*h)] 
    A = [[set() for dir in xrange(len(mat))] for i in xrange(npat)]
    H = [100 for i in xrange(w*h)] 

    for i1 in xrange(npat):
        for i2 in xrange(npat):
            if [n for i, n in enumerate(patterns[i1]) if i%N!=(N-1)] == [n for i, n in enumerate(patterns[i2]) if i%N!=0]:
                A[i1][0].add(i2)
                A[i2][1].add(i1)
            if patterns[i1][:(N*N)-N] == patterns[i2][N:]:
                A[i1][2].add(i2)
                A[i2][3].add(i1)


def draw():    
    global H, W

    emin = int(random(w*h)) if frameCount <= 1 else H.index(min(H)) 

    if H[emin] == 'c': 
        print 'finished'
        noLoop()

    id = choice([idP for idP in W[emin] for i in xrange(freqs[idP])])
    W[emin] = [id]
    H[emin] = 'c' 

    stack = set([emin])
    while stack:
        idC = stack.pop() 
        for dir, t in enumerate(mat):
            x = (idC%w + t[0])%w
            y = (idC/w + t[1])%h
            idN = x + y * w 
            if H[idN] != 'c': 
                possible = set([n for idP in W[idC] for n in A[idP][dir]])
                if not W[idN].issubset(possible):
                    intersection = possible & W[idN] 
                    if not intersection:
                        print 'contradiction'
                        noLoop()
                        return

                    W[idN] = intersection
                    lfreqs = [freqs[i] for i in W[idN]]
                    H[idN] = (log(sum(lfreqs)) - sum(map(lambda x: x * log(x), lfreqs)) / sum(lfreqs)) - random(.001)
                    stack.add(idN)

    fill(patterns[id][0])
    rect((emin%w) * xs, (emin/w) * ys, xs, ys)
