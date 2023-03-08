function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("brown");
  fill(2,150,200)
  rect(0,0,400,300)
  addBert(mouseX,200)
  
  
}
function addBert(mouseX,y){
push()
  translate(mouseX,y)
  fill(0)
  ellipse(73,100,20,40)
  ellipse(53,100,20,40)
  //^legs
  ellipse(78,115,40,20)
  ellipse(48,115,40,20)
  //^feet
  fill(80,0,0)
  ellipse(23,75,40)
  ellipse(103,75,40)
  //^handsdown
  fill(0,60,0)
  ellipse(63,55,100)
  //^body
  fill(200)
  ellipse(73,55,20,20)
  ellipse(53,55,20,20)
//^eyes
  ellipse(63,85,40,1)
  //^mouth
  
  pop()
}
