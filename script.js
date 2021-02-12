let angle = 0

function setup() {
    createCanvas(400, 300, WEBGL)
}

function draw() {
    background(175)

    rectMode(CENTER)
    noStroke()
    fill(0, 0, 255)
    translate(mouseX - width/2, mouseY - height/2)
    rotateX(angle)
    rotateY(angle * 0.3)
    rotateZ(angle * 1.2)

    
    box(10, 100, 50)

    angle+=0.03
}