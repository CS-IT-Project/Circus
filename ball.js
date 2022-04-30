class Ball {
    constructor() {
      this.r = 100;
      this.x = width;
      this.y = height - this.r;
    }
  
    move() {
      this.x -= 10;
    }

    show() {
      image(cbImg, this.x, this.y, this.r, this.r);
    }
}