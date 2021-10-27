var invisibleBg;
var obstaclesGroup;
var barGroup;
var score = 0;

function preload() {
bgImg1 = loadImage("images/forest background.jpg");
kidImg = loadAnimation("images/kid1.png", "images/kid2.png", "images/kid3.png");
m1Img = loadImage("images/dragon.png");
m2Img = loadImage("images/Monsters.png");
m3Img = loadImage("images/thorns.png");
m4Img = loadImage("images/zombie 1.png");
fireImg = loadImage("images/fireBall.png");
}
function setup() {
  createCanvas(1200,800);

  bg = createSprite(600,400);
  bg.addImage(bgImg1);

  kid = createSprite(60,500);
  kid.addAnimation("running",kidImg);
  kid.scale = 0.4;

  obstaclesGroup = new Group();
  barGroup = new Group();



  invisibleBg = createSprite(600,565,1200,20);
  invisibleBg.visible = false;

  bg.velocityX = -3;

 
}

function draw() {
  background(255,255,255);  

  if(bg.x < 0) {
    bg.x = 600;
  }



  if(keyDown(UP_ARROW) && kid.y > 500) {
    kid.velocityY = -12;
  }
  kid.velocityY = kid.velocityY + 0.6;

  kid.collide(invisibleBg);





  console.log(kid.y);

spawnObstacles();
Bar();

if(barGroup.isTouching(kid)) {
  score = score + 1;
}

  drawSprites();

  fill("black");
  stroke("purple");
  textSize (20);
  text("score: "+ score, 1050, 90);

}

function spawnObstacles() {
if(frameCount % 220 === 0) {
  obstacles = createSprite(1220,520);
  obstaclesGroup.add(obstacles);

  obstacles.lifetime = 440;

  obstacles.velocityX = -3;


  var randomNum = Math.round(random(1,5));
  switch(randomNum) {
    case 1: obstacles.addImage(m1Img); 
        obstacles.scale = 0.2;
        break;
    case 2: obstacles.addImage(m2Img); 
        obstacles.scale = 0.5;
        break;
    case 3: obstacles.addImage(m3Img); 
         obstacles.scale = 0.3;
        break;
    case 4: obstacles.addImage(m4Img); 
         obstacles.scale = 0.1;
        break;
    case 5: obstacles.addImage(fireImg); 
         obstacles.scale = 0.1;
        break;

    
  }
}
}

function Bar() {
  if(frameCount % 220 === 0) {
  var bar = createSprite(1220,520,1,300);
  barGroup.add(bar);
  
  bar.lifetime = 440;

  bar.velocityX = -3;
  bar.visible = false;
  
      
    }
}