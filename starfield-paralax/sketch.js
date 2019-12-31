class Star {

    constructor() {
        this.x = Math.floor(Math.random() * (width - -width + 1) + -width);
        this.y = Math.floor(Math.random() * (height - -height + 1) + -height);
        this.z = Math.floor(Math.random() * width);
        this.lastZ = this.z;
    }

    modifyZ() {
        backgroundColour = 20;
        this.z = this.z - (45 * screenWidthModifier);
    }

    update() {
        if(keyIsDown(SHIFT) || isMobileDevice) {
            this.modifyZ();
        } else {
            backgroundColour = 0;
            this.z = this.z - (25 * screenWidthModifier);
        }

        // check if it has reached the centre
        if(this.z < 1) {
            this.z = width;
            this.x = Math.floor(Math.random() * (width - -width + 1) + -width);
            this.y =  Math.floor(Math.random() * (height - -height + 1) + -height);
            this.lastZ = this.z;
        }
    }

    show() {
        stroke(255);
        noStroke();

        let deltaX = map(this.x / this.z, 0, 1, 0, width);
        let deltaY = map(this.y / this.z, 0, 1, 0, height);

        //ellipse(deltaX, deltaY, 4, 4);

        let deltaXLine = map(this.x / this.lastZ, 0, 1, 0, width);
        let deltaYLine = map(this.y / this.lastZ, 0, 1, 0, height);

        this.lastZ = this.z;

        stroke(255);
        line(deltaXLine, deltaYLine, deltaX, deltaY);
    }

}

var stars = [];
var screenWidthModifier = 1; // default for larger screen
var isMobileDevice = false; // default to large screen without touch
var backgroundColour = 0; // default to black

function setup() {
    createCanvas(windowWidth, windowHeight);

    if(windowWidth < 800) {
        screenWidthModifier = 0.5;
    }

    for(var i = 0; i < 999; i++) {
        stars.push(new Star());
    }
}

function touchStarted() {
    isMobileDevice = true;
    return false;
}

function touchEnded() {
    isMobileDevice = false;
    return false;
}

function draw() {
    background(backgroundColour);
    translate(width / 2, height / 2);

    for(var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}