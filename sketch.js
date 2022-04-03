let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let soundClassifier;

function preload() {
  var playerChar = window.prompt("Chose youre character: \n1. Giraffe \n2. Lion \n3. Rabbit \n4. Crocodile");
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);

  if(parseInt(playerChar) == 1)
    uImg = loadImage('Giraffe.PNG');
  else if(parseInt(playerChar) == 2)
    uImg = loadImage('Lion.PNG');
  else if(parseInt(playerChar) == 3)
    uImg = loadImage('Rabbit.PNG');
  else if(parseInt(playerChar) == 4)
    uImg = loadImage('Crocodile.PNG');  
  

  tImg = loadImage('train.png');
  bImg = loadImage('background1.jpg');
}

function mousePressed() {
  trains.push(new Train());
}

function setup() {
  createCanvas(800, 450);
  player = new Player();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    player.jump();
  }
}

// function keyPressed() {
//   if (key == ' ') {
//     unicorn.jump();
//   }
// }

function draw() {
  if (random(1) < 0.005) {
    trains.push(new Train());
  }

  background(bImg);
  for (let t of trains) {
    t.move();
    t.show();
    if (player.hits(t)) {
      console.log('game over');
      noLoop();
    }
  }

  player.show();
  player.move();
}
