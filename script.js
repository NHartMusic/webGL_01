let angle = 0

let mood



let graphics

let love

function preload() {
    mood = loadImage('./Tech_Triangle_02.png');
}

function setup() {
    createCanvas(400, 400, WEBGL)
    //graphics = createGraphics(300, 300)
    //graphics.background(255)

    love = createGraphics(300, 300)
    //love.background(255, 100)
    love.fill(255)
    noStroke()
    love.textAlign(CENTER)
    love.textSize(64)
    love.text('love', 150, 150)
}

function draw() {
    background(0)

    // graphics.fill(255, 0, 255)
    // graphics.ellipse(mouseX, mouseY, 20)
    ambientLight(255)
    // directionalLight(255, 255, 255, 1, 0, 1)
    rotateX(angle)
    rotateY(angle * 1.1)
    rotateZ(angle * 0.8)

    texture(love)

    plane(300, 300)


    angle+=0.02
}