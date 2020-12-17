const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world
var time = 0


function setup() {
  createCanvas(1600,800);
  
  engine = Engine.create();
  world = engine.world

  //first pyramid

  box1 = new Box(530,400,60,60);
  box2 = new Box(590,400,60,60);
  box3 = new Box(650,400,60,60);
  box4 = new Box(710,400,60,60);
  box5 = new Box(470,400,60,60);
  box6 = new Box(410,400,60,60);
  box7 = new Box(770,400,60,60);

  box8 = new Box(590,340,60,60);
  box9 = new Box(650,340,60,60);
  box10 = new Box(710,340,60,60)
  box11 = new Box(470,340,60,60)
  box12 = new Box(530,340,60,60);

  box13 = new Box(650,280,60,60);
  box14 = new Box(590,280,60,60);
  box15 = new Box(530,280,60,60);

  box16 = new Box(590,220,60,60)

  //second pyramid

  box17 = new Box(200,300,40,40);
  box18 = new Box(240,300,40,40);
  box19 = new Box(280,380,40,40);
  box20 = new Box(160,300,40,40);
  box21 = new Box(120,380,40,40);

  box22 = new Box(200,340,40,40);
  box23 = new Box(240,340,40,40);
  box24 = new Box(160,340,40,40);

  box25 = new Box(200,380,40,40);

 

  //first pyramids base

  ground = new Ground(600,700,600,20)

  //second pyramids base

  ground2 = new Ground(200,400,300,20)


  ball = new Ball(1200,300,40);

  sling = new Sling(ball.body,{x : 1200,y : 300});
 
}

function draw() {
  background("black");
  Engine.update(engine);

  time = second();


  textSize(20)
  fill("lightgreen")
  text("Pull the ball to release it",1100,200);

  textSize(40)
  fill("lavender")
  text("Level 2",600,50)

  textSize(20)
  fill("red")
  text("Level 3 coming soon",580,100)

  textSize(20)
  fill("Yellow");
  text("Time taken too clear the boxes : "+time,20,200);


  textSize(20)
  fill("magenta")
  text("Press SPACE to attach the ball to the starting point ",540,250)


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
 
 

  ball.display();

  ground.display();
  ground2.display();

  sling.display();
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body,{x : mouseX,y : mouseY});

}

function mouseReleased() {
sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(ball.body);
  }
}