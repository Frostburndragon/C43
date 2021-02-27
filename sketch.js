var h, m, s;
var ha,ma,sa;

function setup(){
  createCanvas(400,400);
  //To use angle in Degrees angleMode(DEGREES);
}

function draw(){
  background(255);
  translate(200,200);
  rotate(-90);
  noFill();
  strokeWeight(5);

  h=hour();
  m=minute();
  s=second();

  ha=map(h%12,0,12,0,360);
  ma=map(m,0,60,0,360);
  sa=map(s,0,60,0,360);

  push();
  rotate(sa);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke("green");
  arc(0,0,300,300,0,sa);

  push();
  rotate(ma);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  stroke("yellow");
  arc(0,0,280,280,0,ma);

  push();
  rotate(ha);
  stroke("red");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("red");
  arc(0,0,260,260,0,ha);
}