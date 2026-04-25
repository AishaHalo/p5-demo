

var setupScript = function() {};
var drawScript = function() {};
var keyPressedScript = function() {};

var canvasX = 400;
var canvasY = 400;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  drawScript();
}



function keyPressed() {
  keyPressedScript();
}