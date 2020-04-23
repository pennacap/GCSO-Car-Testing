var carSprite, wall, Velocity, Weight, Deformation;
function setup() {
  createCanvas(1600,400);
  carSprite = createSprite(0, 200, 50, 50);
  carSprite.shapeColor = "white";
  wall = createSprite(1500, 200, 60, 400);
  wall.shapeColor = rgb(80, 80, 80);
  Velocity = random(35, 90);
  Weight = random(400, 1500);
  Deformation = (0.5 * Weight * Velocity * Velocity)/ 22500;
}

function draw() {
  background(0);  
  carSprite.velocityX = Velocity/4;
  carSprite.collide(wall, GCSOCheck);
  drawSprites();
  text("Velocity:" + Velocity, 800, 100);
  text("Weight:" + Weight, 800, 300);
}


function GCSOCheck() {
  if (Deformation > 180) {
    carSprite.shapeColor = "red";
  } else if (Deformation <= 180 && Deformation >= 100) {
    carSprite.shapeColor = "yellow";
  } else {
    carSprite.shapeColor = "green";
  }
}