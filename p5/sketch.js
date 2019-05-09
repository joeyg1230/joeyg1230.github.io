function setup() {
  createCanvas(400, 400);
    background(104,242,203);
}
 
function draw() {
  var skinLight = color(153, 100,31 );
  var skinMed = color(219, 157, 77);
  var skinDark = color(153, 100, 31);
  var hair = color(0, 0, 0);
  var shirt = color(114, 110, 107);
  
  var black = color(0, 0, 0);
  

  
  noStroke();
  fill(skinMed);
  rect(165, 200, 70, 100);
  
  fill(shirt);
  rect(115, 263, 170, 150);
  
  fill(shirt);
  ellipse(120, 383, 120, 240);
  
  fill(shirt);
  ellipse(280, 383, 120, 240);
  
  
  
  fill(skinDark);
  ellipse(199, 210, 80, 100);
  
 
  fill(skinMed);
  ellipse(199, 170, 120, 160);
  
  ellipse(138, 173, 20, 40);
  ellipse(260, 173, 20, 40);
  
// skinLight
  noStroke();
  fill(skinLight);
  ellipse(199, 195, 20, 15);
  
// hair  
  fill(0);
  quad(255, 180, 225, 115, 251, 100, 257, 150);
  ellipse(240, 108, 25, 30);
  ellipse(190, 100, 100, 45);
  quad(145, 180, 155, 115, 141, 100, 137, 150);
  quad(145, 160, 165, 135, 220, 110, 157, 100);
  
  // black eyes
  fill(0);
  stroke(0);
  if (mouseIsPressed) {
    line(170, 173, 180, 173);
    line(220, 173, 230, 173);
  } else {
  ellipse(175, 173, 10, 12);
  ellipse(225, 173, 10, 12); }
  
  stroke(black);
  strokeWeight(3);
  line(182, 159, 160, 160);
  line(213, 159, 233, 160);
  line(185, 222, 215, 222);
  
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(0);
  }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66); 

  
}