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
  xdirection = speed;
  ydirection = speed;
  x2direction = speed;
  y2direction = speed;
  x3direction = speed;
  y3direction = speed;
  x4direction = speed;
  y4direction = speed;
  x5direction = speed;
  y5direction = speed;
  x6direction = speed;
  y6direction = speed;
  x2 = 235;
  y2 = 976;
  x3 = 235;
  y3 = 976;
  x4 = 235;
  y4 = 976;
  x5 = 235;
  y5 = 976;
  x6 = 235;
  y6 = 976;
}

function draw() {
  // colour the background black
  background(78);
  // select white as a colour
  // draw a rectangle
  circle(x +60, y +60, 120);
  circle(x2 +60, y2 +60, 120);
  if (x > right - 120) {
    xdirection = speed * -1;
  };
  if (y > bottom - 120) {
    ydirection = speed * -1;
  };
  if (x < 0) {
    xdirection = speed;
  };
  if (y < 0) {
    ydirection = speed;
  };
  x += xdirection;
  y += ydirection;
  if (x2 > right - 120) {
    x2direction = speed * -1;
  };
  if (y2 > bottom - 120) {
    y2direction = speed * -1;
  };
  if (x2 < 0) {
    x2direction = speed;
  };
  if (y2 < 0) {
    y2direction = speed;
  };
  x2 += x2direction;
  y2 += y2direction;
}