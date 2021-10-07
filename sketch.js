var girl, girlImg;
var ground, groundImg;
var edges;

function preload(){
  groundImg = loadImage("Images/background.png");
  girlImg = loadAnimation("Girl/girl00.png","Girl/girl01.png","Girl/girl02.png","Girl/girl03.png","Girl/girl04.png",
  "Girl/girl05.png","Girl/girl06.png","Girl/girl07.png","Girl/girl08.png","Girl/girl09.png","Girl/girl10.png",
  "Girl/girl11.png");
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 200, 800, 400);
  ground.addImage("ground1", groundImg);
  ground.velocityX = -6;

  girl = createSprite(150, 240, 50, 50);
  girl.addAnimation("running", girlImg);
  girl.scale= 0.5;
  //girl.debug = true;
  girl.setCollider("rectangle", 0, 0, 200, 200);


  edges = createEdgeSprites();
}

function draw() {
  background(0); 

  if(ground.x<300){
    ground.x= 400;
  }

  girl.collide(edges);

  drawSprites();
}