let player, pImg, fImg, bImg, cbImg;
var scores = 0;
let obstacle = [];
let soundClassifier;

function preload() {
  var playerChar = window.prompt("Chose youre character: \n1. Giraffe \n2. Lion \n3. Rabbit \n4. Crocodile");
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);

  if(parseInt(playerChar) == 1)
    pImg = loadImage('images/Giraffe.PNG');
  else if(parseInt(playerChar) == 2)
    pImg = loadImage('images/Lion.PNG');
  else if(parseInt(playerChar) == 3)
    pImg = loadImage('images/Rabbit.PNG');
  else if(parseInt(playerChar) == 4)
    pImg = loadImage('images/Crocodile.PNG');  
  
  fImg = loadImage('images/fire.png');
  cbImg = loadImage('images/circus-ball.jpg');
  bImg = loadImage('images/circus.jpg');
}

function mousePressed() {
  obstacle.push(new Obstacle());
}

function setup() {
  //image(bImg,10,10);
  createCanvas(1300, 700);
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

function keyPressed() {
  if (key == ' ') {
     player.jump();
  }
}

function draw() {
  if (random(1) < 0.003) {
    if(Math.floor(Math.random() * 2) == 0)
      obstacle.push(new Fire());
    else
      obstacle.push(new Ball());
  }

  background(bImg);
  for (let o of obstacle) {
    o.move();
    o.show();
    if (player.hits(o)) {
      window.alert("GAME OVER!! your scores: "+scores)
      setTimeout(() => { location.href='http://127.0.0.1:5500/gameover.html'; }, 2000); 
      //document.getElementById("scores").innerHTML = 'your scores:' + scores;
      noLoop();
    }
  }
  
  player.show();
  player.move();
}
