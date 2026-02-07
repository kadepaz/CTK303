let video;
let button;
function setup() {
  let cnv = createCanvas(640, 480);
  cnv.id('mycanvas');
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  button = createButton("Capture Image");
  button.mousePressed(takePic);
  button.id('move');
  colorMode(HSB);
}

function draw() {
  background(0);

  translate(width, 0); 
  scale(-1, 1); // Flip video capture horizontally
  image(video, 0, 0, width, height);
  filter(GRAY); // B&W filter

  noStroke();
  fill(120, 45, 70);
  rect(0, 0, 50, height);
  rect(590, 0, 50, height);
  rect(0, 0, width, 50);
  rect(0, 430, width, 50); // green border
  
  drawLady(50, 50);
  drawLady(573, 455);
  drawLady(610, 420);
}  

function takePic() {
  saveCanvas("selfie!.jpg"); //save as jpg
}

function drawLady(x, y) {
  noStroke()
  fill(0);
  circle(x+5, y-15, 17);
  fill(370, 85, 60);
  circle(x, y, 33);
  stroke(0);
  strokeWeight(2);
  line(x+5, y-15, x-5, y+15)
  fill(0);
  circle(x, y, 6);
  circle(x-11, y+6, 6);
  circle(x+6, y+11, 6);
  circle(x-7, y-10, 6);
  circle(x+12, y-3, 6);
  line(x+5, y-15, x-3, y-30);
  line(x+5, y-15, x+19, y-25);
}