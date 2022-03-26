let unicorn;
let uImg, tImg, bImg;
let trains = [];

function preload(){
    // uImg = loadImage('');
    // tImg = loadImage('');
    // bImg = loadImage('');
}

function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
}

function KeyPressed(){
    if (key == ' '){
        Unicorn.jump();
    }
}

function draw(){
    if(random(1) < 0.005){
        trains.push(new Train());
    }

    background(bImg);

    for (let t of trains){
        t.move();
        t.show();
    }

    unicorn.show();
    unicorn.move();
}
