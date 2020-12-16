
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbinline1,dustbinline2,dustbinline3;

function preload()
{
	
}

function setup() {
createCanvas(1200, 1000);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

paper = new Paper(150,670,50,50);
ground = new Ground(100,690,2500,10);
dustbinline2 = new Dustbin(1000,690,100,20);
dustbinline1 = new Dustbin(950,650,20,100);
dustbinline3 = new Dustbin(1050,650,20,100);


}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbinline2.display();
  dustbinline1.display();
  dustbinline3.display();

  drawSprites();
  
}

function keyPressed(){
if( keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-125})
}
}



