var player, PSF, PSB, PSS, PWF, PWB, PWS, p2, p2_img;
var Back_Ground, Back_Ground_img;
var player_animation=0;
var topWall, bottomWall, leftWall, rightWall;
var topWall_img, bottomWall_img, leftWall_img, rightWall_img;
function preload(){
  //player_animation
  //player_standing
  PSF=loadAnimation("Player/PS/PSF.png");
  PSB=loadAnimation("Player/PS/PSB.png");
  PSS=loadAnimation("Player/PS/PSS.png");
  //player_walking
  PWF=loadAnimation("Player/PWF/PWF1.png","Player/PWF/PWF2.png","Player/PWF/PWF3.png","Player/PWF/PWF4.png","Player/PWF/PWF5.png","Player/PWF/PWF6.png","Player/PWF/PWF7.png","Player/PWF/PWF8.png","Player/PWF/PWF9.png","Player/PWF/PWF10.png");
  PWB=loadAnimation("Player/PWB/PWB1.png","Player/PWB/PWB2.png","Player/PWB/PWB3.png","Player/PWB/PWB4.png","Player/PWB/PWB5.png","Player/PWB/PWB6.png","Player/PWB/PWB7.png","Player/PWB/PWB8.png","Player/PWB/PWB9.png","Player/PWB/PWB10.png");
  PWS=loadAnimation("Player/PWS/PWS1.png","Player/PWS/PWS2.png","Player/PWS/PWS3.png","Player/PWS/PWS4.png","Player/PWS/PWS5.png","Player/PWS/PWS6.png","Player/PWS/PWS7.png","Player/PWS/PWS8.png","Player/PWS/PWS9.png","Player/PWS/PWS10.png");
  p2_img=loadImage("Player/P2.png");
  //back_ground
  Back_Ground_img=loadAnimation("Bg.jpg");
  //wall_img
  rightWall_img=loadImage("Objects/right-wall.png");
  leftWall_img=loadImage("Objects/left-wall.png");
  bottomWall_img=loadImage("Objects/bottom-wall.png");
  topWall_img=loadImage("Objects/top-wall.png");
}

function setup() {
  createCanvas(2000,900);
  //background
  Back_Ground=createSprite(0,0,50,50);
  Back_Ground.addAnimation("outside",Back_Ground_img);
  Back_Ground.scale=1.5;
  //walls
  rightWall=new Wall(817,0,10,100,rightWall_img);
  leftWall=new Wall(-817,0,10,100,leftWall_img);
  topWall=new Wall(0,-748,10,100,topWall_img);
  bottomWall=new Wall(0,768,10,100,bottomWall_img);
  //player
  player=createSprite(0, 0, 20, 20);
    //player animations
    player.addAnimation("psf",PSF);
    player.addAnimation("psb",PSB);
    player.addAnimation("pss",PSS);
    player.addAnimation("pwf",PWF);
    player.addAnimation("pwb",PWB);
    player.addAnimation("pws",PWS);
  player.scale=2.5;
  p2=createSprite(0, 0, 20, 20);
  p2.addImage(p2_img);
  p2.scale=2.5;
  p2.visible=false;
}

function draw() {
  background("black");
  console.log(player.x,player.y);
  camera.x = player.x;
  camera.y = player.y;
  rightWall.display();
  leftWall.display();
  topWall.display();
  bottomWall.display();
  playerMovement();
  drawSprites();
}
function playerMovement(){
  player.x=p2.x;
  player.y=p2.y-20;
  //playeMovement
  if(keyDown("up")){
    p2.y-=5;
    player.changeAnimation("pwb",PWB);
    player_animation=1;
  } else if(keyDown("down")){
    p2.y+=5;
    player.changeAnimation("pwf",PWF);
    player_animation=2;
  } else if(keyDown("right")){
    p2.x+=5;
    player.mirrorX(-1);
    player.changeAnimation("pws",PWS);
    player_animation=3;
  } else if(keyDown("left")){
    p2.x-=5;
    player.mirrorX(1);
    player.changeAnimation("pws",PWS);
    player_animation=4;
  }
  if(!keyDown("up") && player_animation === 1){
    player.changeAnimation("psb",PSB)
  }
  if(!keyDown("down") && player_animation === 2){
    player.changeAnimation("psf",PSF)
  }
  if(!keyDown("right") && player_animation === 3){
    player.mirrorX(-1);
    player.changeAnimation("pss",PSS)
  }
  if(!keyDown("left") && player_animation === 4){
    player.mirrorX(1);
    player.changeAnimation("pss",PSS)
  }
}