var car,wall,carImg;
var speed,weight;
//var deformation;
//Deformation=0.5/22500,
speed=7
weight=random(400,1500);
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 100, 50);
  wall=createSprite(1350,200,60,400);
  car.shapeColor="white";
  wall.shapeColor="brown";
  car.velocityX=speed;
  //carImg=loadImage("white1.png");
}

function draw() {
  background("black");  
  drawSprites();
 //if(car.isTouching("wall")&&car.shapeColor==="white"){
     //car.shapeColor="green";
  // car.addImage(carImg); 
 // }
 createEdgeSprites();
 if(car.shapeColor==="white"&&car.x===1350||car.x<1350&&car.x>1340){
   car.shapeColor="green";
   car.x=50;
 }
 if(car.shapeColor==="green"&&car.x===1350||car.x<1350&&car.x>1340){
   car.shapeColor="yellow";
   car.x=50;
}
if(car.shapeColor==="yellow"&&car.x===1350||car.x<1350&&car.x>1340){
    car.shapeColor="red";
    car.x=50;
 }
 if(car.shapeColor==="red"&&car.x===1350||car.x<1350&&car.x>1340){
    car.shapeColor="red";
    car.x=400;
    //car.velocityX=0;
 }
}