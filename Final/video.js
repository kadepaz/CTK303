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
}  

function takePic() {
  saveCanvas("selfie!.jpg"); //save as jpg
}