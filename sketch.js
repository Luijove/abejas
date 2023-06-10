let theBody = [];
let img;
let imagen;

function preload() {
  img = loadImage("abeja.png");
  imagen = loadImage("flowers.jpg")
}

function setup() {
  createCanvas(728, 410);
  imageMode(CENTER);
  for (let i = 0; i < 10; i++) {
    theBody[i] = new Body(
      random(0, width),
      random(0, height),
      floor(random(-1, 2)),
      floor(random(-1, 2))
    );
  }
}

function draw() {
  background(255);
  imageMode(CORNER);
  image(imagen, 0,0);
  

  for (let i = 0; i < theBody.length; i++) {
    theBody[i].move();

    theBody[i].display();
  }
}

class Body {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
  move() {
    this.x += this.velX;

    if (this.x > width-25 || this.x < -25) {
      this.velX *= -1;
    }

    this.y += this.velY;
    if (this.y > height-25 || this.y < -25) {
      this.velY *= -1;
    }
    //console.log(this.velX);
  }
  display() {
    if (this.velX == -1) {
      push();
      // Scale -1, 1 means reverse the x axis, keep y the same.
      scale(-1, 1);

      // Because the x-axis is reversed, we need to draw at different x position.
      image(img, -this.x, this.y, 50, 50);

      pop();
    }
    if (this.velX == 1 || this.velX == 0) {
      image(img, this.x, this.y, 50, 50);
    }
  }
}
