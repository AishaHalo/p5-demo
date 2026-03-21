function setup() {
  createCanvas(400, 500);
  frameRate(20);
}

function draw() {
  background(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  );
}
