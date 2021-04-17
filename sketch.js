var mouse, cat;
var bgImg;

function preload() {
    //load the images here
  catImg1=loadImage("images/cat1.png") ;
  mouseImg1=loadAnimation ("images/mouse1.png");
  catImg2=loadAnimation("cat1.png","cat2.png");
  mouseImg2=loadAnimation("mouse1.png","mouse2.png")
  bgImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprites(870,600);
    cat.addAnimation("tomSleeping",catImg1);
    cat.scale=0.2;
    mouse=createSprites(200,600);
    mouse.addAnimation("jerryStanding",mouseImg1);
    mouse.scale=0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.changeAnimation("catTeasing") ;  
    }
    if(mouse.x-cat.x<(mouse.width-cat.width)/2){
      mouse.changeAnimation("mouseTeasing");
    }
    drawSprites(); 
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay=25;
}
if(keyCode===LEFT_ARROW){
  cat.addAnimation("catTeasing",cat2.catImg2);
  cat.chaengeAnimation("catTeasing");
  cat.frameDelay=25;
}

}
