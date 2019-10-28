function setup() {
  createCanvas(400, 400);
  
}
function draw() {
  var lighter = color(250,210,185);
  var light = color(260,220,195);
  var dark = color(240, 200, 175); 
  var black = color(0,0,0);
  var hair = color(100,70,40);
  var shirt = color(40,210,111);
  var white = color(255,255,255);
  var blue = color(135,206,250);
   
  background(220);
  fill(blue);
  textSize(32);
  text('SELF PORTRAIT', 75, 50);
  
  noStroke();
  fill(shirt);
  ellipse(200,400,300,260);
  
  noStroke();
  fill(shirt);
  ellipse(75,390,75,125);
  
   noStroke();
  fill(shirt);
  ellipse(325,390,75,125);
  
  noStroke
  fill(blue)
  point (30,20)
  
  noStroke();
  fill(dark);
  ellipse(200,275,100,125);
  
  noStroke();
  fill(light);
  ellipse(200,210,150,190);
  
  noStroke();
  fill(light);
  ellipse(200,190,150,190);
  
  noStroke();
  fill(light);
  ellipse(127,200,30,60);
  
  noStroke();
  fill(light);
  ellipse(273,200,30,60);
  
 noStroke();
  fill(hair);
  rect(127,170,5,40);
  rect(270,170,5,40);
  
noStroke();
  fill(hair);
  ellipse(200,190,155,200);
  
  noStroke();
  fill(light);
  ellipse(200,215,150,180);

  fill(white);
  ellipse(175, 195, 27, 15);
  ellipse(225, 195, 27, 15);
  
  fill(blue);
  circle(175,195, 15,15);
  circle(225,195,15,15);
  
  fill(black)
  circle(175, 195, 7,7);
  circle(225,195,7,7);
  
  stroke(hair);
  strokeWeight(5);
  line(160,175,185,170);
  line(240, 175, 215, 170);

  noStroke();
  fill(lighter)
  ellipse(200,220,25,20);
triangle(190,225, 200, 200, 210, 225);
 
  
  stroke(black)
  strokeWeight(3)
  line(185,250,215,250);

  fill(shirt);
  textSize(15);
  text('Joel Thayer', 300, 380);
}


