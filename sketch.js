var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 100, 10, 10);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(100,100,10,30);
  movingRect.shapeColor = "orange";
  //VideoPlaybackQuality.X = 4

  wall = createSprite(600,200,1000,5);
  wall.shapeColor = "white";

 //if (movingRect.istouching(wall)){
  // movingRect.x = 100;
   //movingRect.y = 100;
 //}

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }
  drawSprites();
}