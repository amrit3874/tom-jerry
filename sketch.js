var tom,tomrunningimage,tomimage;
var jerry, jerryteasingimage;
var garden,gardenimage;

function preload() {
    //load the images here
    tomrunningimage = loadAnimation("images/cat2.png","images/cat3.png");
    tomimage = loadAnimation("images/cat1.png");
    jerryteasingimage = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    gardenimage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    tom = createSprite(150,275,50,50);
    
    tom.addAnimation("sitting",tomimage);
    tom
    tom.scale = 0.1;

     
    jerry = createSprite(40,250,30,30);
    jerry.addAnimation("teasing",jerryteasingimage);
    jerry.scale = 0.1;
}

function draw() {
    background(gardenimage );
    //Write condition here to evalute if tom and jerry collide
   text(mouseX + ',' + mouseY , 10 , 45);
   
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX=  -5;
      tom.addAnimation("tomrunning",tomrunningimage);
      tom.changeAnimation("tomrunning");
  }

}
