var form,game,player;
var database,gameState=0,playerCount=0;

var runner1,runner_Img;
var obstacles,obstacleImg1,obstacleImg2;
var reward,foodImg,jewelImg,treasureImg;
var bg1,bg2,bg3,bg,invisibleground;

function preload(){
    runner_Img=loadAnimation("img1.png","img2.png","img3.png",
                 "img4.png","img5.png","img6.png");
    obstacleImg1=loadImage("ufo.png");
    obstacleImg2=loadImage("alien.png");
   foodImg=loadImage("fruit.png");
    jewelImg=loadImage("ruby.png");
    treasureImg=loadImage("jewel.png");
    bg1=loadImage("moon run.PNG");
    bg2=loadImage("bg2.PNG");
    bg3=loadImage("bg3.PNG");
    bg=loadImage("Good.png")
}
function setup(){
    
var canvas= createCanvas(1200,600);
database=firebase.database();
game=new Game();
game.getState();
game.start();

}
function draw(){
   
    // background(bg);

    if(playerCount===1){
        game.updateState(1);
    }
    if(gameState===1){
        game.play();

      
    }
    
  
//console.log(gameState);
// console.log(runner1)
drawSprites();
}
