
function setup() {
  createCanvas(800,400);
angleMode(DEGREES);
}

function draw() {
background(0);
translate(200,200);
rotate(-90)
  let hr = hour();
  let mn = minute();
  let sc = second();




strokeWeight(4);
stroke(255,100,150);
noFill();
end1= map(sc,0,60,0,360);
 arc(0,0,300,300,0,sc)

 push()
 rotate(sc)
stroke(255,100,150)
 line(0,0,100,0)
 pop()

 stroke(150,100,255);
 end2= map(mn,0,60,0,360);
 arc(0,0,280,280,0,mn)

 push()
 rotate(mn)
stroke(150,100,255)
 line(0,0,110,0)
 pop()

 stroke(150,255,100);
 end3= map(hr %12,0,12,0,360);
 arc(0,0,260,260,0,hr)

 push()
 rotate(hr)
stroke(150,255,100)
 line(0,0,120,0)
 pop()
}