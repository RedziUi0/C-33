const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

var backImg , snowImg
var snowfall ;


function preload (){
backImg = loadImage("snow2.jpg")
snowImg = loadImage("snow4.webp")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;





  Engine.run(engine);
}

function draw() {
  background(backImg);
  

  SnowfallForSure();

  drawSprites();
}
function SnowfallForSure(){
  if(frameCount%20===0){

snowfall = createSprite(random(0,800),5,5,5)
snowfall.addImage(snowImg);
snowfall.scale = 0.1 ;

snowfall.velocityY = 3 ;
snowfall.lifetime = 300 ;


    
    }
}


