const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,groundObject
var world;
var box1, box2, box3;
var box1body, box2body, box3body;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	box1=createSprite(1100,600,20,100);
	box1.shapeColor=color(255);

	box2=createSprite(1200,650,200,20);
	box2.shapeColor=color(255);
	
	box3=createSprite(1300,600,20,100);
	box3.shapeColor=color(255);

	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);

	box1body = Bodies.rectangle(1100,600,20,100,{isStatic:true});
	World.add(world, box1body);

	box2body = Bodies.rectangle(1200,650,200,20,{isStatic:true});
	World.add(world, box2body);

	box3body = Bodies.rectangle(1300,600,20,100,{isStatic:true});
	World.add(world, box3body);
	Engine.run(engine);
 }
 function draw() {
	 rectMode(CENTER);
	 background(0);

	 paperObject.display();
	 groundObject.display();
	 Engine.update(engine);
		
		box1.x= box1body.position.x
		box1.y= box1body.position.y
		  
		box2.x= box2body.position.x
		box2.y= box2body.position.y

  		box3.x= box3body.position.x
		box3.y= box3body.position.y

		box1.display();
		box2.display();
		box3.display();

		drawSprites();
	}
	function keyPressed() {
		if (keyCode === UP_ARROW) {
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}
	}