const cubeSize = 50; // Size of each small cube

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(40);
  frameRate(60);

  createEasyCam(
    {
      distance: 400,
      // rotation: [0.2, -1, 0, -0.25],
      rotation: [0.9, -0.185, -0.365, 0.068],
    },
    500
  );

  // Suppress right-click context menu
  document.oncontextmenu = function () {
    return false;
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(21);
  lights();

  const overlayText = document.getElementById("text-overlay");
  overlayText.textContent = `FPS: ${Number(frameRate()).toFixed(4)}`;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        push();
        translate(x * cubeSize, y * cubeSize, z * cubeSize);
        draw3DCube(x, y, z);
        pop();
      }
    }
  }
}

function draw3DCube(x, y, z) {
  noStroke(); // Disable edges for the planes
  drawFace(0, 0, cubeSize / 2, [255, 0, 0], 0, 0); // Front face (red)
  drawFace(0, 0, -cubeSize / 2, [255, 165, 0], 0, PI); // Back face (orange)
  drawFace(cubeSize / 2, 0, 0, [255, 255, 0], HALF_PI, 0); // Right face (yellow)
  drawFace(-cubeSize / 2, 0, 0, [255, 255, 255], -HALF_PI, 0); // Left face (white)
  drawFace(0, -cubeSize / 2, 0, [0, 0, 255], 0, -HALF_PI); // Top face (blue)
  drawFace(0, cubeSize / 2, 0, [0, 255, 0], 0, HALF_PI); // Bottom face (green)

  drawCubeOutline(); // Draw the black outline for the entire cube
}

function drawFace(tx, ty, tz, faceColor, rotY, rotX) {
  push();
  translate(tx, ty, tz);
  rotateY(rotY);
  rotateX(rotX);
  fill(faceColor);
  beginShape();
  vertex(-cubeSize / 2, -cubeSize / 2, 0);
  vertex(cubeSize / 2, -cubeSize / 2, 0);
  vertex(cubeSize / 2, cubeSize / 2, 0);
  vertex(-cubeSize / 2, cubeSize / 2, 0);
  endShape(CLOSE);
  pop();
}

function drawCubeOutline() {
  stroke(0); // Black outline
  strokeWeight(2);
  noFill();
  box(cubeSize); // Use `box()` to draw the outline of the cube
}
