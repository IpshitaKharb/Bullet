var wall,thickness;
var bullet,speed,weight;

function setup() {

  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(500,200,30,5);
  bullet.shapeColor="white"

  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  

  if(Collided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

      if (damage>10){
        wall.shapeColor=color("red");
      }

      if (damage<10) {
        wall.shapeColor=color("green");
      }







  }


}

function Collided(object1,object2){
  if (object2.x-object1.x<object1.width/2+object2.width/2){
      return true;
  }else{
    return false;
  }
}