var x = 0;
var y = 0;

function setup() {
    translate(width * 0.5, height * 0.5);
    createCanvas(500, 500);
    frameRate(30);
    angleMode(RADIANS);
    background(25, 127, 123);
    for (i = 0; i < 2000; i = i + 50) {
        stroke(color(70, 153, 162));
        line(0, i, 2000, i);
        line(i, 0, i, 2000);
    }
    stroke(color(79, 180, 177));
    fill(0, 0, 0, 25)
    circle(250, 250, 500)
    strokeWeight(2);
    line(250, 0, 250, 500);
    line(0, 250, 500, 250);
    for (i = 0; i < 2000; i = i + 100) {
        line(0 + i, 262.5, 0 + i, 237.5);
        line(237.5, 500 - i, 262.5, 500 - i);
        
    }
    strokeWeight(1);
}


function draw() {
    translate(width * 0.5, height * 0.5);
    
    
    noStroke();
    
    stroke(color(192, 216, 235));
    if (Math.random() < 0.5) {
        stroke(color(106, 209, 177));
    }
    
    quad((sin(x / 40) * y), (cos(x / 40) * y), (tan(x / 40) * y), (cos(x / 40) * y), (cos(x / 40) * y), (cos(x / 40) * y), (cos(x / 40) * y), (cos(x / 40) * y));
    x += 5;
    y += 0.5;
    
}

function mouseClicked() {
    x = 0;
    y = 0;
    setup();
}
