//Matter.js is the physics engine library
//3 objects of matter.js 
//1. Matter.Engine - laws of physics , auto there is a world created
//2. Matter.World - Earth
//3. Matter.Bodies - Human Being
// namespacing - making it shorter
//var - its value can be changed anytime
//const - it's values are never change

// Classes and Object where with 1 class we can create n number of objects
//Object has 2 things, Properties(physically outside : width, height, color) and Functions (what can the object do?)
//Pen is an object Properties: width, height, color type and functions: write,drawing
//Class is a design of an object, with 1 class we can create n number of objects
//With one design/blueprint of a pen we can create n number of pen objects

 const Engine = Matter.Engine
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine,world,ground;
var box1, box2;
 var pig1
 var log1
 var pig2 
 var log2
 var box3,box4,box5
 var log3,log4
 var bird

function setup() {
  //create the engine - Engine.create()
  engine = Engine.create() //when an engine is created auto a world is also created (world is called as engine.world)
  world = engine.world;

  createCanvas(1200,400);

   //ground body - rectangle

  

  ground = new Ground(600,height,1200,20)

  //Box object
  box1 = new Box(700,320,70,70); 
  box2 = new Box(920,320,70,70);
   pig1=new Pig(810,350)
   log1=new Log(810,260,300,PI/2)

   box3 = new Box(700,240,70,70); 
   box4 = new Box(920,240,70,70);
    pig2=new Pig(810,220)
    log2=new Log(810,180,300,PI/2)
 box5 = new Box(810,160,70,70)
 log3=new Log(760,120,150,PI/7)
 log4 =new Log(870,120,150,-PI/7)
 bird= new Bird (100,100)
}

function draw() {
  //Updating the engine - Engine.update()
  Engine.update(engine)
  background(0);  //0-black, 255-white

 

  //if you do not mention your box will not be created
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
log3.display();
log4.display();
box5.display();
bird.display();
}