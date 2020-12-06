var o1, o2, o3;

function setup() {
  createCanvas(1200,800);
  //o3 = createSprite(400,150, 50, 80);
  //o3.shapeColor = "green";
  o1 = createSprite(400, 100, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(400, 500 ,80,30);
  o2.shapeColor = "green";
  o2.debug = true;

  o2.velocityY = 0;
  o1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if(isTouching(o1,o2)){
    o1.shapeColor = "red";
    o2.shapeColor = "red";
  }
    else{
      o1.shapeColor = "green";
      o2.shapeColor = "green";
    }
  

  bounceOff(o1,o2)

  drawSprites();
}


