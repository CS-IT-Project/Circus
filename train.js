class Train{
    constructor(){
        this.r = 100;
        this.x = widh;
        this.y = height - this.r;

    }

    move(){
        this.x -= 16;
    }

    show(){
        Image(tImg, this.x, this.y, this.r, this.r);
    }
}
