class Unicorn{
    constructor(){
        this.r = 150;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2;
    }

    jump(){
        if (this.y == height - this.r)
            this.vy = -35;
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r)
    }
    
    show(){
        Image(uImg, this.x, this.y, this.r, this.r);
    }
    
}