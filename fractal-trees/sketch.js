var angle;
let screenSizeMultiplier = 1;
let colourMultiplier = 0.7;
let strokeMultiplier = 0.67;

function setup() {
  createCanvas(
    windowWidth * screenSizeMultiplier,
    windowHeight * screenSizeMultiplier
  );
  //var cnv = createCanvas(windowWidth * screenSizeMultiplier, windowHeight * screenSizeMultiplier);
  //cnv.style('display', 'block');
}

function draw() {
  angle = TWO_PI * 0.93;
  stroke(255);
  translate(windowWidth / 2, windowHeight);
  drawTree(windowHeight / 3.5);
}

function drawTree(length) {
  // intial tree body
  strokeWeight(length / 25);
  stroke(0, 2 * length * colourMultiplier, 0);
  line(0, 0, 0, -length);
  translate(0, -length);

  if (length > 4) {
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

function windowResized() {
  resizeCanvas(width, height);
}
