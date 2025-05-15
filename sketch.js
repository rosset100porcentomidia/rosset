function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background('red');
  //rosto
  stroke('black')
  strokeWeight(9)
  fill('rgb(245,190,200)')
  circle(200, 200, 300);
  
    //olhos
  fill('blue')
  stroke('black')
  strokeWeight(5)
  circle(150, 150, 60);
  circle(250, 150, 60);
  
  //boca
  stroke('rgb(240,70,100)')
  strokeWeight(8)
  line(100, 260, 290, 260);
  
  //pupilas
  stroke('rgb(124,21,21)')
  strokeWeight(10)
  fill('#571700')
 // circle(150, 150, 15)//olho equerdo
  strokeWeight(8)
  //circle(250, 150, 15)
  
  olhoX = map(mouseX,0,400,129,148)
  olhoY = map(mouseY,0,400,129,148)
  
  circle(olhoX,olhoY, 15)
  circle(olhoX+100,olhoY, 15)
  
  
  //nariz
  fill('violet')
  triangle(197, 179, 175, 205, 207, 206)
//cabelo
  stroke('brown')
  strokeWeight(11)
  line(154,86,186,5)
  line(174,86,206,5)
  line(194,86,230,5)
  line(215,86,256,5)
  line(240,86,276,5)
  
  
  if(mouseIsPressed){
  console.log(mouseX,mouseY);  
     }
}