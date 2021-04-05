const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,
block13,block14,block15,block16,block17,block18,block19,block20,block21,block22
var img1,img2,img3,img4,img5



function preload()
{
img1 = loadImage("b.jpg")
img2 = loadImage("lb.jpg")
img3 = loadImage("lb2.jpg")
img4 = loadAnimation("wq1.jpg","wq2.jpg")
}
function setup() {
  createCanvas(900,1500);
  engine = Engine.create();
	world = engine.world;
 
block1 = createSprite(450,20,200,50)
block1.addImage(img1)
block2 = createSprite(30,253,70,150)
block2.addImage(img2)
//block3 = createSprite(30,375,80,90)
block4 = createSprite(30,521,700,200)
block7 = createSprite(400,600,60,20)
 ///block7.addAnimation('asd',img4)  
 block7.scale=0.5
block5 = createSprite(380,368,150,100)
block5.addImage(img2)
block6 = createSprite(435,469,100,100)   


   
  
}

function draw() {
  rectMode(CENTER);
  background(0); 
  
   
  
  
 
 
 
 
 
 
 
  Engine.run(engine);
  drawSprites();
  
}