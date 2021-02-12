let angle = 0

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL)
}

function draw() {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let v = createVector(dx,dy,0);
    v.normalize();
    
    ambientLight(0, 0, 255)
    directionalLight(255, 0, 0, v)
    
    background(175)
    specularMaterial(0, 0, 255)
    noStroke()
    rotateX(angle)
    rotateY(angle * 0.5)
 

    torus(100, 25)

    angle+=0.03
}