let angle = 0


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
    background(0)

    let cameraX = map(mouseX, 0, width, 200, -200)
    camera(cameraX, 0, (height/2) / tan(PI/6), cameraX, 0, 0, 0, 1, 0)
    ambientLight(255)

    push()
    rotateX(angle)
    rotateY(angle * 0.5)
    noStroke()
    normalMaterial()
    box(100)
    
    pop()

    translate(0, 100)
    
    rotateX(HALF_PI)
    noStroke()
    ambientMaterial(255)
    plane(500,500)
    angle+=0.03
}