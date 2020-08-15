var car, wall;
var rate, weight;

function setup() {
  createCanvas(800,400);
 
 wall=createSprite(600, 200, 15, 400);
 car=createSprite(40,200,30,18);

  rate=random(40,70);
  weight=2300;
  console.log(rate);
}

function draw() {
  background("black");  
  
  car.velocityX=rate;
  car.shapeColor=color(255);
  car.collide(wall);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*rate*rate/22500;
    if (deformation>180)
    {
        car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
   {
      car.shapeColor=color(230,230,0);
   }

   if (deformation<100)
   {
      car.shapeColor=color(0,255,0);
   }
  }

  drawSprites();
}