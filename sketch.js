
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
                                                                                                                                                                              
                                                                                                                                                
var paper,ground,dustbin1;
             




function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(50,680,30);
    ground=new Ground(500,700,1000,20);
   
dustbin1=new Dustbin(800,670,150,150);


}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.run(engine);
 
 
  
  paper.display();
  ground.display();
  dustbin1.display();
   
 if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-24})
}
}



