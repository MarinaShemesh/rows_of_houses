console.log('Rows of houses');


function setup() {
  createCanvas(2000, 1800);
  background(255);
  colorMode(HSB);
}

function draw() {

  for (let x = 5; x < width; x += 100) {
    for (let y = 5; y < height; y += 90) {
      push();
      translate(x, y);
      drawHouse();
      pop();
    }

  }
}


function drawHouse() {
//roof
  fill(30, 100, 0);
  triangle(30, 0, 0, 30, 60, 30);
//house
  fill(0, 0, 100);
  rect(0, 30, 60, 45);
//door
  fill(240, 100, 0);
  rect(20, 50, 15, 25);



}
function mousePressed(){
  save('houses.png');
}

//credit:https://genekogan.com/code/p5js-transformations/