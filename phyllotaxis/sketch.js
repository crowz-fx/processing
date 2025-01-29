let rotationFactor = 0;
let patternOffset = 10;
let patternElementSize = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(60);
  colorMode(HSB);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // FPS overlay injected into HTML element present in index.html
  const overlayText = document.getElementById("text-overlay");
  overlayText.textContent = `FPS: ${Number(frameRate()).toFixed(4)}`;

  // Centre viewport
  translate(width / 2, height / 2);

  // Add a spinning effect
  // rotate(rotationFactor * 0.5);

  for (let i = 0; i < rotationFactor; i++) {
    let angle = i * 137.5;
    let radius = patternElementSize * sqrt(i);

    let x = radius * cos(angle);
    let y = radius * sin(angle);

    let colour = sin(patternOffset + i * 0.1);
    colour = map(colour, -1, 1, 0, 360);
    fill(colour, 255, 255);

    noStroke();
    ellipse(x, y, patternElementSize + 1, patternElementSize + 1);
  }

  patternOffset += 0.2;
  rotationFactor += 6;

  // Reset so not killing the device it's rendering on
  if (rotationFactor > 3500) {
    rotationFactor = 0;
    patternOffset = 0;
  }
}
