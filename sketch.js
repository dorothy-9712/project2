var track,path
var man,left,right
var edges
function preload(){
  //pre-load images
track=loadImage("path.png")
man=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(track)
  path.velocityY=4;
  path.scale=1.2;
runner=createSprite(200,200)
runner.addAnimation("running",man)
runner.velocityY=-4
runner.scale=0.08
left=createSprite(0,0,100,800)
left.visible=false
right=createSprite(410,0,100,800)
right.visible=false
edges=createEdgeSprites()
}

function draw() {
  background(0);
  runner.x=mouseX
  if (path.y>400 )
  {
    path.y=200
  }
  runner.collide(edges[3])
  runner.collide(left)
  runner.collide(right)
drawSprites()
}
