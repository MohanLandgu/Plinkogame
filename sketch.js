const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;


var particles =[]
var plinkos =[]
var divisions=[]
 var divisionHeight=200;

function setup() {
  createCanvas(800,400);
  engine =Engine.create();
  world = engine.world; 

 

 
  ground =new  Ground(400,390,800,20)
  
  for(var k =0;k<=width;k=k+90) {
    divisions.push(new Division(k, height-divisionHeight/2,20,divisionHeight));
   }

for (var j=15;j<=width;j = j+45){
plinkos.push(new Plinko(j,85))
}

for (var j=30;j<=width;j = j+45){
  plinkos.push(new Plinko(j,55))
  }

  for (var j=15;j<=width;j = j+45){
    plinkos.push(new Plinko(j,25))
    }
  
    Engine.run(engine)
}


function draw() {
  rectMode(CENTER)
  background("black"); 

  Engine.update(engine);

  ground.display();

  drawSprites();

  


  for(var n = 0;n<divisions.length;n++){
divisions[n].display();
  }

  if(frameCount%20===0){
    particles.push(new Partical(random(width/2-400,width/2+400),10,10))
  }

  for(var h=0;h<particles.length;h++){

    particles[h].display();
  }

for (var j= 0;j<plinkos.length;j++){
  plinkos[j].display();
}



}
