var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  

  movingRect=createSprite(100, 150, 100, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX = 2;
  movingRect.velocityY = 2;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor="green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  //movingRect.x=mouseX;
  //movingRect.y=mouseY;


if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor="red";
  movingRect.shapeColor="red";
  //movingRect.velocityX = -(movingRect.velocityX);
  //movingRect.velocityY = -(movingRect.velocityY);
}

else{
  gameObject1.shapeColor="green";
  movingRect.shapeColor="green";
}

bounceOff(movingRect,fixedRect);


  drawSprites();
}
