class Star {

    constructor() {
        this.x = Math.floor(Math.random() * (width - -width + 1) + -width);
        this.y = Math.floor(Math.random() * (height - -height + 1) + -height);
        this.z = Math.floor(Math.random() * width);
        this.lastZ = this.z;
    }

    update() {
        this.z = this.z - 15;

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

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(var i = 0; i < 699; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    for(var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}


