function setup() {
  // create a canvas
  createCanvas(window.innerWidth, window.innerHeight);
  var r = random(255);
  var g = random(255);
  var b = random(255);
  fill(r, g, b);
  x = 20;
  y = 20;
  top = 0;
  left = 0;
  bottom = window.innerHeight;
  right = window.innerWidth;
  speed = 5;
  xdirection = 1;
  ydirection = 1;
}

function draw() {
  // colour the background black
  background(255);
  // select white as a colour
  // draw a rectangle
  rect(x, y, 100, 100);
  circle(x, 120, 120);
  if (x > right) {
    xdirection = xdirection - speed;
  };
  if (y > bottom) {
    ydirection = ydirection - speed;
  };
  if (x < left) {
    xdirection = ydirection + speed;
  };
  if (y < top) {
    ydirection = ydirection + speed;
  };
  console.log(x,y);
  x += xdirection;
  y += ydirection;
}