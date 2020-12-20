
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40

	//Create the Bodies Here.
	roof = new Platform(370,200,400,40)
	bob1 = new Bob(240,400,bobDiameter);
	bob2 = new Bob(300,400,bobDiameter);
	bob3 = new Bob(360,400,bobDiameter);
	bob4 = new Bob(420,400,bobDiameter);
	bob5 = new Bob(480,400,bobDiameter);
	
	//ropes
	rope1=new Rope(bob1.body,roof.body,-125,0)
	rope2=new Rope(bob2.body,roof.body,-(bobDiameter*1+25), 0)
	rope3=new Rope(bob3.body,roof.body,0+-(5), 0)
	rope4=new Rope(bob4.body,roof.body,55, 0)
	rope5=new Rope(bob5.body,roof.body,(bobDiameter*2+30), 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode===32) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-260,y:0});

	}
}

