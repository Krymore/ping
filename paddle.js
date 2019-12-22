class Paddle {
  constructor() {
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.x = this.w;

  }

  update() {
    this.y = constrain(mouseY, this.h / 2, height - this.h / 2);
  }



  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
