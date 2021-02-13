let angle = 0


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
    background(0)

    let fov = map(mouseX, 0, width, 0, PI)
    let cameraZ = (height / 2.0) / tan((fov / 2))
    perspective (fov, width / height, 0, 2000 )

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