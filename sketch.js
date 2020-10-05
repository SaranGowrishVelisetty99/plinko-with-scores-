var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particleOb;

var gameState = "start";

var turn = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500", 20,550);
 text("500",100,550);
 text("500",180,550);
 text("500",260,550);
 text("100",340,550);
 text("100",420,550);
 text("100",500,550);
 text("200",580,550);
 text("200",660,550);
 text("200",740,550);
 text("Turns: "+turn,200,30);
  Engine.update(engine);
 
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0; j<particles.length;j++){
    particles[j].display();
  }*/
  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y>760&&particleOb.body.position.x>0&&particleOb.body.position.x<320){
     score = score+500;
     particleOb=null;
     if(turn>=5) gameState = "end";
    }
  }
  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y>760&&particleOb.body.position.x>320&&particleOb.body.position.x<560){
     score = score+100;
     particleOb=null;
     if(turn>=5) gameState = "end";
    }
  }
  if(particleOb!=null){
    particleOb.display();
    if(particleOb.body.position.y>760&&particleOb.body.position.x>560&&particleOb.body.position.x<800){
     score = score+200;
     particleOb=null;
     if(turn>=5) gameState = "end";
    }
  }
 
  if(gameState === "end"){
    textSize(46);
    text("Game Over", 320, 360);
  }
}
function mousePressed(){
  if(gameState!=="end"){
    particleOb=new Particle(mouseX,10,10);
    turn = turn+1;
  }
  
 
}
