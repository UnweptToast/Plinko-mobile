var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particlePos;
var particleY, particleX;
var ground;
var state = "score";
var one = true;
var chances = 10;
var d1 = [];

var divisionHeight=300;
var score =0;
var gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var d = 1; d <=10; d++) {
    d1.push(Math.round(random(0, 150)))
  }

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
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("Score: " + score, 40, 30);
   textSize(25);text(d1[0], 20, 760);
   textSize(25);text(d1[1], 100, 760);
   textSize(25);text(d1[2], 180, 760);
   textSize(25);text(d1[3], 260, 760);
   textSize(25);text(d1[4], 340, 760);
   textSize(25);text(d1[5], 420, 760);
   textSize(25);text(d1[6], 500, 760);
   textSize(25);text(d1[7], 580, 760);
   textSize(25);text(d1[8], 660, 760);
   textSize(25);text(d1[9], 740, 760);

   //console.log(particlePos)
   if(particles.length > 0) {
    var y = particles.length - 1;
    particleY = particles[y].body.position.y;
    var x = particles.length - 1;
    particleX = particles[x].body.position.x;
    //console.log(chances)
   }

   if(score > 950) {
    textSize(80);text("You Won!", width/2 - 150, height/3 - 10);
   gameState = "over"
   }
   ground.display();
   scoring();

}

function touchEnded() {
  if(one && chances > 0 && gameState === "play") {
  state = "score"
  particles.push(new Particle(mouseX, Math.round(random(5, 15)),10));
    //console.log(mouseX + ", " + mouseY)
    var x = particles.length - 1;
    particlePos = particles[x].body.position.x;
    //console.log(mouseY)
    one = false
    chances -= 1;
    console.log(chances)
  }
}

function scoring() {
  if(state === "score") {
    if(particleY > 500) {
      state = "score"
      one = true;
      var add = which_d();
      score += add;
      state = "scored"
  }
  else if(state === "scored") {}
}
}

function which_d() {
  if(particleX > 0 && particleX < 80) {
    return d1[0];
  }
  if(particleX > 80 && particleX < 160) {
    return d1[1];
  }
  if(particleX > 160 && particleX < 240) {
    return d1[2];
  }
  if(particleX > 240 && particleX < 320) {
    return d1[3];
  }
  if(particleX > 320 && particleX < 400) {
    return d1[4];
  }
  if(particleX > 400 && particleX < 480) {
    return d1[5];
  }
  if(particleX > 480 && particleX < 560) {
    return d1[6];
  }
  if(particleX > 560 && particleX < 640) {
    return d1[7];
  }
  if(particleX > 640 && particleX < 720) {
    return d1[8];
  }
  if(particleX > 720 && particleX < 800) {
    return d1[9];
  }
  else {return 0;}
}