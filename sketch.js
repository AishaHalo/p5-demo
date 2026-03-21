function setup() {
  createCanvas(400, 500);
  frameRate(20);
}

function draw() {

  var r = 100;
  var h = 200;
  var k = 200;

  var x = r*cos(millis() / 1000) + h;
  var y = r*sin(millis() / 100)  + k;

  circle(x,y,200)
  
  background(500)
  
}




