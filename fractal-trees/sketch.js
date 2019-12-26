var angle;
let screenSizeMultiplier = 0.7;
let colourMultiplier = 0.70;
let strokeMultiplier = 0.67;

function setup() {
    createCanvas(displayWidth * screenSizeMultiplier, displayHeight * screenSizeMultiplier);
}

function draw() {
    angle = TWO_PI * 0.93;
    stroke(255);
    translate(width / 2, height);
    drawTree(height / 3.5);
}

function drawTree(length) {
    // intial tree body
    strokeWeight(length / 25);
    stroke(0, 2 * length * colourMultiplier, 0);
    line(0, 0, 0, -length);
    translate(0, -length);

    if(length > 4) {
        // right branch
        push();
        rotate(angle);
        strokeWeight(length * strokeMultiplier);
        stroke(0, 2 * length * colourMultiplier, 0);
        drawTree(length * 0.67);
        pop();

        // dots on the ends of the branches
        fill(0, 2 * length * colourMultiplier, 0);
        ellipse(0, 0, length / 12, length / 12);
        
        // left branch
        push();
        rotate(-angle);
        strokeWeight(length * strokeMultiplier);
        stroke(0, 2 * length * colourMultiplier, 0);
        drawTree(length * 0.67);
        pop();
    }
}