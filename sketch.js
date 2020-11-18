
var gameState = 0;
function preload(){
  backgroundImg = loadImage("pictures/background.png");
  bench = loadImage("pictures/bench.png");
  boyImg = loadImage("pictures/boy.png");
  girlImg = loadImage("pictures/girl.png");
  teacherImg = loadImage("pictures/t.png");
  green= loadImage("pictures/green.png");
  red= loadImage("pictures/red.png");
  scaleImage = loadImage("pictures/scale.png");
  buzz = loadSound("pictures/Buzzer.mp3")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(450,450,450,450);
  background1.addImage(backgroundImg);
  background1.scale = 2;
  
  vert = createSprite(500,680,30,30);
  vert.addImage(scaleImage);
  vert.scale = 2.28;

  b1 = createSprite(60,730,30,30);
  b1.addImage(bench);
  b1.scale = 0.15;

  b2 = createSprite(220,730,30,30);
  b2.addImage(bench);
  b2.scale = 0.15;

  b3 = createSprite(380,730,30,30);
  b3.addImage(bench);
  b3.scale = 0.15;  

  b4 = createSprite(540,730,30,30);
  b4.addImage(bench);
  b4.scale = 0.15;  

  b5 = createSprite(700,730,30,30);
  b5.addImage(bench);
  b5.scale = 0.15;  

  boy3 = createSprite(700,730,30,30);
  boy3.addImage(boyImg);
  boy3.scale = 0.2;
  
  light5 = createSprite(boy3.x,boy3.y,30,30);
  light5.addImage(green);
  light5.scale = 0.1;

  light55 = createSprite(boy3.x,boy3.y,30,30);
  light55.addImage(red);
  light55.scale = 0.1;
  light55.visible = false;

  b6 = createSprite(860,730,30,30);
  b6.addImage(bench);
  b6.scale = 0.15;  

  b7 = createSprite(60,630,30,30);
  b7.addImage(bench);
  b7.scale = 0.15;  

  girl5 = createSprite(60,600,30,30);
  girl5.addImage(girlImg);
  girl5.scale = 0.25;


  b8 = createSprite(220,630,30,30);
  b8.addImage(bench);
  b8.scale = 0.15;  

  boy4 = createSprite(220,600,30,30);
  boy4.addImage(boyImg);
  boy4.scale = 0.2;

  light7 = createSprite(boy4.x,boy4.y,30,30);
  light7.addImage(green);
  light7.scale = 0.1;

  light77 = createSprite(boy4.x,boy4.y,30,30);
  light77.addImage(red);
  light77.scale = 0.1;
  light77.visible = false;

  b9 = createSprite(380,630,30,30);
  b9.addImage(bench);
  b9.scale = 0.15;  

  girl4 = createSprite(380,600,30,30);
  girl4.addImage(girlImg);
  girl4.scale = 0.25;

  light8 = createSprite(girl4.x,girl4.y,30,30);
  light8.addImage(green);
  light8.scale = 0.1;

  light88 = createSprite(girl4.x,girl4.y,30,30);
  light88.addImage(red);
  light88.scale = 0.1;
  light88.visible = false;

  b10 = createSprite(540,630,30,30);
  b10.addImage(bench);
  b10.scale = 0.15;  
  
  teach = createSprite(700,500,30,30);
  teach.addImage(teacherImg);
  teach.scale = 0.8;

  light11 = createSprite(740,500,30,30);
  light11.addImage(green);
  light11.scale = 0.1;

  light111 = createSprite(140,730,30,30);
  light111.addImage(red);
  light111.scale = 0.1;
  light111.visible = false;
  
  b12 = createSprite(860,600,30,30);
  b12.addImage(bench);
  b12.scale = 0.2;  

  boy5 = createSprite(540,600,30,30);
  boy5.addImage(boyImg);
  boy5.scale = 0.2;

  light9 = createSprite(boy5.x,boy5.y,30,30);
  light9.addImage(green);
  light9.scale = 0.1;

  light99 = createSprite(boy5.x,boy5.y,30,30);
  light99.addImage(red);
  light99.scale = 0.1;
  light99.visible = false;

  girl1 = createSprite(220,700,30,30);
  girl1.addImage(girlImg);
  girl1.scale = 0.25;
  
  light2 = createSprite(girl1.x,girl1.y,30,30);
  light2.addImage(green);
  light2.scale = 0.1;

  light22 = createSprite(girl1.x,girl1.y,30,30);
  light22.addImage(red);
  light22.scale = 0.1;
  light22.visible = false;

  girl2 = createSprite(540,700,30,30);
  girl2.addImage(girlImg);
  girl2.scale = 0.25;

  light4 = createSprite(girl2.x,girl2.y,30,30);
  light4.addImage(green);
  light4.scale = 0.1;
  
  light44 = createSprite(girl2.x,girl2.y,30,30);
  light44.addImage(red);
  light44.scale = 0.1;
  light44.visible = false;

  girl3 = createSprite(860,700,30,30);
  girl3.addImage(girlImg);
  girl3.scale = 0.25;

  light6 = createSprite(girl3.x,girl3.y,30,30);
  light6.addImage(green);
  light6.scale = 0.1;
  
  light66 = createSprite(girl3.x,girl3.y,30,30);
  light66.addImage(red);
  light66.scale = 0.1;
  light66.visible = false;

  boy1 = createSprite(60,730,30,30);
  boy1.addImage(boyImg);
  boy1.scale = 0.2;

    
  light1 = createSprite(boy1.x,boy1.y,30,30);
  light1.addImage(green);
  light1.scale = 0.1;

  light11 = createSprite(boy1.x,boy1.y,30,30);
  light11.addImage(red);
  light11.scale = 0.1;
  light11.visible = false;

  boy2 = createSprite(380,730,30,30);
  boy2.addImage(boyImg);
  boy2.scale = 0.2;
  
  light3 = createSprite(boy2.x,boy2.y,30,30);
  light3.addImage(green);
  light3.scale = 0.1;
  
  light33 = createSprite(boy2.x,boy2.y,30,30);
  light33.addImage(red);
  light33.scale = 0.1;
  light33.visible = false;

  light10 = createSprite(girl5.x,girl5.y,30,30);
  light10.addImage(green);
  light10.scale = 0.1;

  light101 = createSprite(girl5.x,girl5.y,30,30);
  light101.addImage(red);
  light101.scale = 0.1;
  light101.visible = false;  

  /*girl1.debug = true;
  girl2.debug = true;
  girl3.debug = true;
  girl4.debug = true;
  girl5.debug = true;
  boy1.debug = true;
  boy2.debug = true;
  boy3.debug = true;
  boy4.debug = true;
  boy5.debug = true;*/
  
  
  girl1.setCollider("rectangle",0,-50,320,350);
  girl2.setCollider("rectangle",0,-50,320,350);
  girl3.setCollider("rectangle",0,-50,320,350);
  girl4.setCollider("rectangle",0,-50,320,350);
  girl5.setCollider("rectangle",0,-50,320,350);
  boy1.setCollider("rectangle",0,-80,350,400);
  boy2.setCollider("rectangle",0,-80,350,400);
  boy3.setCollider("rectangle",0,-80,350,400);
  boy4.setCollider("rectangle",0,-80,350,400);
  boy5.setCollider("rectangle",0,-80,350,400);
  teach.setCollider("rectangle",180,0,100,210);
}


function draw() {
background("white");
text("x:" +mouseX,mouseX,mouseY);
text("y"+mouseY,mouseX+50,mouseY);
textSize(25);
push();
stroke("red");
text("The Distance Between two long lines is 1 metre.",240,940);
pop();

light1.x = boy1.x;
light1.y = boy1.y;
light11.x = boy1.x;
light11.y = boy1.y;

light2.x = girl1.x;
light2.y = girl1.y;
light22.x = girl1.x;
light22.y = girl1.y;

light3.x = boy2.x;
light3.y = boy2.y;
light33.x = boy2.x;
light33.y = boy2.y;

light4.x = girl2.x;
light4.y = girl2.y;
light44.x = girl2.x;
light44.y = girl2.y;

light5.x = boy3.x;
light5.y = boy3.y;
light55.x = boy3.x;
light55.y = boy3.y;

light6.x = girl3.x;
light6.y = girl3.y;
light66.x = girl3.x;
light66.y = girl3.y;

light7.x = boy4.x;
light7.y = boy4.y;
light77.x = boy4.x;
light77.y = boy4.y;

light8.x = girl4.x;
light8.y = girl4.y;
light88.x = girl4.x;
light88.y = girl4.y;

light9.x = boy5.x;
light9.y = boy5.y;
light99.x = boy5.x;
light99.y = boy5.y;

light10.x = girl5.x;
light10.y = girl5.y;
light101.x = girl5.x;
light101.y = girl5.y;

if(boy1.isTouching(girl1)||boy1.isTouching(girl2)||boy1.isTouching(girl3)||boy1.isTouching(girl4)||boy1.isTouching(girl5)||boy1.isTouching(boy2)||boy1.isTouching(boy3)||boy1.isTouching(boy4)||boy1.isTouching(boy5)){
   buzz.play();
   light1.visible = false;
   light11.visible = true;
}
else{
   light1.visible = true;
   light11.visible = false;
}

if(boy2.isTouching(girl1)||boy2.isTouching(girl2)||boy2.isTouching(girl3)||boy2.isTouching(girl4)||boy2.isTouching(girl5)||boy2.isTouching(boy1)||boy2.isTouching(boy3)||boy2.isTouching(boy4)||boy2.isTouching(boy5)){
   buzz.play();
   light3.visible = false;
   light33.visible = true;
}

else{
   light3.visible = true;
   light33.visible = false;
}

if(boy3.isTouching(girl1)||boy3.isTouching(girl2)||boy3.isTouching(girl3)||boy3.isTouching(girl4)||boy3.isTouching(girl5)||boy3.isTouching(boy2)||boy3.isTouching(boy1)||boy3.isTouching(boy4)||boy3.isTouching(boy5)){
   buzz.play();
   light5.visible = false;
   light55.visible = true;
}

else{
   light5.visible = true;
   light55.visible = false;
}

if(boy4.isTouching(girl1)||boy4.isTouching(girl2)||boy4.isTouching(girl3)||boy4.isTouching(girl4)||boy4.isTouching(girl5)||boy4.isTouching(boy2)||boy4.isTouching(boy3)||boy4.isTouching(boy1)||boy4.isTouching(boy5)){
   buzz.play();
   light7.visible = false;
   light77.visible = true;

}

else{
   light7.visible = true;
   light77.visible = false;
}

if(boy5.isTouching(girl1)||boy5.isTouching(girl2)||boy5.isTouching(girl3)||boy5.isTouching(girl4)||boy5.isTouching(girl5)||boy5.isTouching(boy2)||boy5.isTouching(boy3)||boy5.isTouching(boy4)||boy5.isTouching(boy1)){
   buzz.play();
   light9.visible = false;
   light99.visible = true;

}

else{
   light9.visible = true;
   light99.visible = false;
}

if(girl1.isTouching(boy1)||girl1.isTouching(girl2)||girl1.isTouching(girl3)||girl1.isTouching(girl4)||girl1.isTouching(girl5)||girl1.isTouching(boy2)||girl1.isTouching(boy3)||girl1.isTouching(boy4)||girl1.isTouching(boy5)){
   buzz.play();
   light2.visible = false;
   light22.visible = true;

}

else{
   light2.visible = true;
   light22.visible = false;
}

if(girl2.isTouching(girl1)||girl2.isTouching(boy1)||girl2.isTouching(girl3)||girl2.isTouching(girl4)||girl2.isTouching(girl5)||girl2.isTouching(boy2)||girl2.isTouching(boy3)||girl2.isTouching(boy4)||girl2.isTouching(boy5)){
   buzz.play();
   light4.visible = false;
   light44.visible = true;

}

else{
   light4.visible = true;
   light44.visible = false;
}

if(girl3.isTouching(girl1)||girl3.isTouching(girl2)||girl3.isTouching(boy1)||girl3.isTouching(girl4)||girl3.isTouching(girl5)||girl3.isTouching(boy2)||girl3.isTouching(boy3)||girl3.isTouching(boy4)||girl3.isTouching(boy5)){
   buzz.play();
   light6.visible = false;
   light66.visible = true;

}

else{
   light6.visible = true;
   light66.visible = false;
}

if(girl4.isTouching(girl1)||girl4.isTouching(girl2)||girl4.isTouching(boy1)||girl4.isTouching(boy1)||girl4.isTouching(girl5)||girl4.isTouching(boy2)||girl4.isTouching(boy3)||girl4.isTouching(boy4)||girl4.isTouching(boy5)){
   buzz.play();
   light8.visible = false;
   light88.visible = true;

}

else{
   light8.visible = true;
   light88.visible = false;
}

if(girl5.isTouching(girl1)||girl5.isTouching(girl2)||girl5.isTouching(boy1)||girl5.isTouching(boy1)||girl5.isTouching(girl4)||girl5.isTouching(boy2)||girl5.isTouching(boy3)||girl5.isTouching(boy4)||girl5.isTouching(boy5)){
   buzz.play();
   light10.visible = false;
   light101.visible = true;

}
else{
   light10.visible = true;
   light101.visible = false;
}


   if(keyDown("m")){
      boy1.x = 60; 
      boy1.y = 720;

      boy2.x = 380; 
      boy2.y = 720;

      boy3.x = 700; 
      boy3.y = 720;

      boy4.x = 220; 
      boy4.y = 600;

      boy5.x = 540; 
      boy5.y = 600;

      girl1.x = 220; 
      girl1.y = 720;

      girl2.x = 540; 
      girl2.y = 720;

      girl3.x = 860; 
      girl3.y = 720;

      girl4.x = 380; 
      girl4.y = 600;

      girl5.x = 60; 
      girl5.y = 600;

   }

  if(keyDown("q")){
    gameState =1;
  }
  if(gameState === 1){
    if(keyDown("up_arrow")){
      boy1.y = boy1.y-2;
      
      }
   if(keyDown("left_arrow")){
      boy1.x = boy1.x-2;
      
      }
   if(keyDown("down_arrow")){
      boy1.y = boy1.y+2;
      
      }
   if(keyDown("right_arrow")){
      boy1.x = boy1.x+2;
      
  }
}

if(keyDown("e")){
  gameState =3;
}
if(gameState === 3){
  if(keyDown("up_arrow")){
    boy2.y = boy2.y-2;
    
    }
 if(keyDown("left_arrow")){
    boy2.x = boy2.x-2;
    
    }
 if(keyDown("down_arrow")){
    boy2.y = boy2.y+2;
    
    }
 if(keyDown("right_arrow")){
    boy2.x = boy2.x+2;
    
}
}

if(keyDown("t")){
  gameState =5;
}
if(gameState === 5){
  if(keyDown("up_arrow")){
    boy3.y = boy3.y-2;
    
    }
 if(keyDown("left_arrow")){
    boy3.x = boy3.x-2;
    
    }
 if(keyDown("down_arrow")){
    boy3.y = boy3.y+2;
    
    }
 if(keyDown("right_arrow")){
    boy3.x = boy3.x+2;
    
}
}

if(keyDown("u")){
  gameState =7;
}
if(gameState === 7){
  if(keyDown("up_arrow")){
    boy4.y = boy4.y-2;
    
    }
 if(keyDown("left_arrow")){
    boy4.x = boy4.x-2;
    
    }
 if(keyDown("down_arrow")){
    boy4.y = boy4.y+2;
    
    }
 if(keyDown("right_arrow")){
    boy4.x = boy4.x+2;
    
}
}

if(keyDown("o")){
  gameState =9;
}
if(gameState === 9){
  if(keyDown("up_arrow")){
    boy5.y = boy5.y-2;
    
    }
 if(keyDown("left_arrow")){
    boy5.x = boy5.x-2;
    
    }
 if(keyDown("down_arrow")){
    boy5.y = boy5.y+2;
    
    }
 if(keyDown("right_arrow")){
    boy5.x = boy5.x+2;
    
}
}

if(keyDown("w")){
  gameState =2;
}
if(gameState === 2){
  if(keyDown("up_arrow")){
    girl1.y = girl1.y-2;
    
    }
 if(keyDown("left_arrow")){
    girl1.x = girl1.x-2;
    
    }
 if(keyDown("down_arrow")){
    girl1.y = girl1.y+2;
    
    }
 if(keyDown("right_arrow")){
    girl1.x = girl1.x+2;
    
}
}

if(keyDown("r")){
  gameState =4;
}
if(gameState === 4){
  if(keyDown("up_arrow")){
    girl2.y = girl2.y-2;
    
    }
 if(keyDown("left_arrow")){
    girl2.x = girl2.x-2;
    
    }
 if(keyDown("down_arrow")){
    girl2.y = girl2.y+2;
    
    }
 if(keyDown("right_arrow")){
    girl2.x = girl2.x+2;
    
}
}

if(keyDown("y")){
  gameState =6;
}
if(gameState === 6){
  if(keyDown("up_arrow")){
    girl3.y = girl3.y-2;
    
    }
 if(keyDown("left_arrow")){
    girl3.x = girl3.x-2;
    
    }
 if(keyDown("down_arrow")){
    girl3.y = girl3.y+2;
    
    }
 if(keyDown("right_arrow")){
    girl3.x = girl3.x+2;
    
}
}

if(keyDown("i")){
  gameState =8;
}
if(gameState === 8){
  if(keyDown("up_arrow")){
    girl4.y = girl4.y-2;
    
    }
 if(keyDown("left_arrow")){
    girl4.x = girl4.x-2;
    
    }
 if(keyDown("down_arrow")){
    girl4.y = girl4.y+2;
    
    }
 if(keyDown("right_arrow")){
    girl4.x = girl4.x+2;
    
}
}

if(keyDown("p")){
  gameState =10;
}
if(gameState === 10){
  if(keyDown("up_arrow")){
    girl5.y = girl5.y-2;
    
    }
 if(keyDown("left_arrow")){
    girl5.x = girl5.x-2;
    
    }
 if(keyDown("down_arrow")){
    girl5.y = girl5.y+2;
    
    }
 if(keyDown("right_arrow")){
    girl5.x = girl5.x+2;
    
}
}

drawSprites();


}
