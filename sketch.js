var tom,tomrunningimage,tomimage;
var jerry, jerryteasingimage;
var garden,gardenimage;

function preload() {
    //load the images here
    tomrunningimage = loadAnimation("cat2.png,cat3.png");
    tomimage = loadImage("cat1.png");
    jerryteasingimage = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
    gardenimage = loadimage("garden.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    tom = createSprite(150,275,50,50);
    tom.addImage(tomimage);

    garden = createSprite(600,600);
    garden.addImage(gardenimage);

    jerry = createSprite(40,250,30,30);
    

}

function draw() {
    background(0);
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
