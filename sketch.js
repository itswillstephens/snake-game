var s;
var scl = 20;
var food;
var snakescore = 0;

function setup() {
  createCanvas(innerWidth, innerHeight - 50);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = width/scl;
  var rows = height/scl;
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if(s.eat(food)) {
    pickLocation();  
    snakescore++;
  }
  s.update();
  s.show();

  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
  document.getElementById('score').innerHTML = `Your score: ${snakescore}`;
}

function keyPressed () {
  if(keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if(keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if(keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }

}