class Ball {
    constructor() {
      this.r = 100;
      this.x = width;
      this.y = height - this.r;
      width=700;
    }
  
    move() {
      this.x -= 5;
    }
  
    show() {
      image(cbImg, this.x, this.y, this.r, this.r);
  
      // fill(255, 50);
      // ellipseMode(CORNER);
      // ellipse(this.x, this.y, this.r, this.r);
    }
  }
  