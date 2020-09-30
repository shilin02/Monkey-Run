var Survival_Time






var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
  
  
  
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  
  
  
  
}


function draw() {
background(180);
  
  
  stroke("white");
textSize(20);
fill("white");
text("Score :"+ score , 500,50);

stroke("black");
textSize(20);
fill("black");
Survival_Time= Math.ceil(frameCount/frameRate());
text("Survival Time: " + Survival_Time ,100,50);

  
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }      
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
      
    }
  
  
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  Banana();
  
  Rock();
          
 drawSprites();          
  
}

function Banana(){
  
 if (frameCount % 70 === 0) {
     banana = createSprite(300,130,40,10);
    banana.y = Math.round(random(210,240));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 130;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
   
    }
 
  
}
function Rock(){

if (frameCount % 90 === 0){
   var rock = createSprite(400,165,10,40);
  rock.y = Math.round(random(330,340));
   rock.addImage(rockImage);
  rock.scale = 0.08;
  rock.velocityX = -3;
    
     
    rock.lifetime = 140;
    
    
  
    
}
}