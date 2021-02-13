let angle = 0


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
    background(0)

    // ortho()
    pointLight(255, 255, 255, 0, -200, 200)

    
    for (let x = -200; x < 200; x += 50) {
        push()
        translate(x, 0, x - 200)
        rotateX(angle)
        rotateY(angle * 0.5)
        noStroke()
        ambientMaterial(255)
        box(50)
        pop()
    }
    

    translate(0, 100)
    
    rotateX(HALF_PI)
    noStroke()
    ambientMaterial(255)
    plane(600,600)
    angle+=0.03
}