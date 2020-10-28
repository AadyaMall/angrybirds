const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,Log1,bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(290,300,50,50);
    ground = new Ground(200,height,400,20);
    pig1=new Pig (230,300,50,40);
    Log1=new Log (200,250,300,PI/2);
    box3 = new Box (150,230,50,50);
    box4 = new Box (320,230,50,50);
    pig2 = new Pig (240,230,50,50);
    Log2 = new Log(200,200,300,PI/2);
    pig3 = new Pig (200,200,50,50);
    Log3 = new Log (180,130,140,PI/7);
    Log4=new Log(250,130,140,-PI/7);
    bird= new Bird(50,50,50,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    pig2.display();
    Log2.display();
    pig3.display();
    Log3.display();
    Log4.display();
    bird.display();
}