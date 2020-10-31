var bullet,wall,ground;
var thickness,speed,weight;

function setup() {
  createCanvas(1000,400);

  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)

  bullet = createSprite(50, 270, 50, 20);
  bullet.shapeColor = "white";
  ground = createSprite(500,380,1000,60)
  ground.shapeColor = "black"
  wall = createSprite(950,250,thickness, height/2)
  wall.shapeColor = color(80,80,80)
  console.log(wall.shapeColor)

  bullet.velocityX = speed;
}

function draw() {
  background("cyan");

//console.log(wall.width);

  if(isTouching(bullet,wall))
     {
       bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);

  if(damage < 10) {
    bullet.shapeColor = "green";
  }

  if(damage > 10){
    bullet.shapeColor = "red";
  }
     }
  else {bullet.shapeColor = "white"}

     bullet.depth = wall.depth;
     bullet.depth = bullet.depth + 1;

  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x - object2.x < object2.width/2
  + object1.width/2 && object2.x - 
  object1.x < object2.width/2 + 
  object1.width/2) {
    return true;
  }
  else {
    return false;
  }
}