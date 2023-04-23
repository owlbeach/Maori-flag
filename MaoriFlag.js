// Māori flag

// The official red colour for the Māori flag is (227, 24, 55)
// Source: https://mch.govt.nz/nz-identity-heritage/flags/national-m%C4%81ori-flag
// However, (212, 0, 0) is a darker red which may look better depending on the
// type of device you're displaying the image on.

// I couldn't find any proportions for the flag online so the flag is not pixel perfect

const x = 8; // Controls the size of the flag

function setup() {
  createCanvas(108 * x, 60 * x);
  background(0); // Black background
}

function draw() {
  const red = color(212, 0, 0);
  const white = color(255);
  
  
  // The top most white circle
  fill(white);
  stroke(0);
  circle(30 * x, 21.35 * x, 26.83 * x);
  
  // Top left white bar
  noStroke(); // comment this line to show the outlines of the flag
  rect(0, 8 * x, 30.8 * x, 15.8 * x);
  
  // Middle left red bar
  fill(red);
  rect(0, 19 * x, 30.8 * x, 15.8 * x);
  
  // Bottom red block
  rect(0, 34.8 * x, 108 * x, 60 * x)
  
  // Red circle in the middle of the pattern
  fill(red);
  circle(29.8 * x, 26.98 * x, 16 * x);
  
  // Half white circle
  const circleDiameter = 21.7;
  fill(white);
  arc(30 * x, 34.7 * x, circleDiameter * x, circleDiameter * x, radians(90), radians(270));
   
  // White circle in the middle of the pattern
  circle(30 * x, 29.31 * x, 11 * x);
  
  // Bottom white bar
  fill(white);
  rect(30 * x, 34.76 * x, 80 * x, 10.78 * x);
}