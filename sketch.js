var boy,boy_running;
var dog;
var ground;
var food;
var home;

function preload(){
boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
boy = createSprite(300,600,14,10);
boy.addAnimation("running",boy_running);
ground = createSprite(50,800,windowWidth,24)
}

function draw(){
  background("white");
  drawSprites();
}