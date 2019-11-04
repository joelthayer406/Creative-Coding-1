var redColor = 110;
var greenColor = 100;
var blueColor = 190;

var x 100;
var y = 200;
var diameter = 50;
var movement = 10;

  // this function is called upon once
function setup()
{
createCanvas(800,600);
}
/* this is called upon continuously in an open browser
*/
function draw()
{
background(redColor,greenColor,blueColor);
circle(x,y,diameter);
x++;

}
