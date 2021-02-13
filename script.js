let angle = 0

let graphics

function setup() {
    createCanvas(400, 400, WEBGL)
    graphics = createGraphics(200, 200)
    graphics.background(255)
}

function draw() {
    background(0)

    graphics.fill(255, 0, 255)
    graphics.ellipse(mouseX, mouseY, 20)
    ambientLight(100)
    directionalLight(255, 255, 255, 1, 0, 1)
    rotateX(angle)
    rotateY(angle * 1.3)
    rotateZ(angle * 0.7)

    texture(graphics)
    box(150)

    angle+=0.03
}