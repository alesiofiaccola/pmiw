// https://www.youtube.com/watch?v=uqq5Xvb6ndg
//alesio fiaccola 
//comision 1

let rotation = false; //r
let colourVibrant = false; //c
let mirror = false; //y
let image22;
let chromatics = false; //g
let blues = false; //b
let random = false; //o

function preload(){
  image22 = loadImage("./data/22.jpg");
}
function setup() {
  createCanvas(800, 400);
  noStroke();
}


function draw() {
  background(200);
  image(image22, 0, 0, 400, 400);
  push();
  translate(-400, 0);
  pop();
  
  if(key == "r"){
    rotation = true;
  }else if(key == "c"){
    colourVibrant = true;
  }else if(key == "y"){
    mirror = true;
  }else if(key == "b"){
    blues = true;
  }else if(key == "g"){
    chromatics = true;
  }else if(key == "o"){
    random = true;
  }else if(key == "s"){
    reiniciar();
  }
  
  //quads(X1, X2, Y1, Y2, X1, X2, Y3, Y4);
  quads(400, 500, 0, 100, 600, 700, 200, 300);
}
