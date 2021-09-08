var form,game,player;
var database,gameState=0,playerCount=0;

var runner1,runner_Img;
var obstacles,obstacleImg1,obstacleImg2;
var reward,foodImg,jewelImg,treasureImg;
var bg1,bg2,bg3,bg,invisibleground;

function preload(){
    runner_Img=loadAnimation("images/img1.png","images/img2.png","images/img3.png",
                 "images/img4.png","images/img5.png","images/img6.png");
    obstacleImg1=loadImage("images/ufo.png");
    obstacleImg2=loadImage("images/alien.png");
   foodImg=loadImage("images/fruit.png");
    jewelImg=loadImage("images/ruby.png");
    treasureImg=loadImage("images/jewel.png");
    bg1=loadImage("images/moon run.png");
    bg2=loadImage("images/bg2.png");
    bg3=loadImage("images/bg3.png");
    bg=loadImage("images/Good.png")
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
