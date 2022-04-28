class Fire {
    constructor() {
      this.r = 100;
      this.x = width;
      this.y = height - this.r;
    }
  
    move() {
      this.x -= 10;
    }
  
    show() {
      image(fImg, this.x, this.y, this.r, this.r);

      // fill(255, 50);
      // ellipseMode(CORNER);
      // ellipse(this.x, this.y, this.r, this.r);
    }

    showBall() {
      image(cbImg, this.x, this.y, this.r, this.r);
    }

  }
  