var boy, boy_moving;
var path, pathImg, invisibleBoundary1, invisibleBoundary2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boy_moving = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200,180,20,50);
  boy.addAnimation("moving", boy_moving);
  boy.scale = 0.1;

  invisibleBoundary1 = createSprite(370,210,10,500);
  invisibleBoundary1.visible = false;

  invisibleBoundary2 = createSprite(30,210,10,500);
  invisibleBoundary2.visible = false;
}


function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  boy.x = World.mouseX;

  boy.collide(invisibleBoundary1);
  boy.collide(invisibleBoundary2);

  drawSprites();
}
