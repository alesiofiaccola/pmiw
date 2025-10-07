function mousePressed(){
 if(diapositiva === "0"){
  if(clickNext(120, 300, 100, 50)){
    diapositiva = 1;
  }
 }
 
 if(diapositiva === "1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = 2;
   }
 }
  if(diapositiva === "2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "a1";
   }else if(clickOption(360, 300, 100, 50)){
     diapositiva = "b1";
   }
 }
  if(diapositiva === "a1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "a2";
   }
 }
  if(diapositiva === "a2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "a3";
   }
 }
   if(diapositiva === "a3"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "c1";
   }else if(clickOption(360, 300, 100, 50)){
     diapositiva = "d1";
   }
  }
     if(diapositiva === "b1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "b2";
   }
 }
   if(diapositiva === "b2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "e1";
   }else if(clickOption(360, 300, 100, 50)){
     diapositiva = "f1";
   }
 }
  if(diapositiva === "c1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "c2";
   }
 }
  if(diapositiva === "c2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "d1";
   }
 }
  if(diapositiva === "d1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "d2";
   }
 }
  if(diapositiva === "d2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "d3";
   }
 }
  if(diapositiva === "d3"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "d4";
   }
 }
  if(diapositiva === "d4"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "g1";
   }else if(clickOption(360, 300, 100, 50)){
     diapositiva = "h1";
   }
 }
   if(diapositiva === "e1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "e2";
   }
 }
  if(diapositiva === "e2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "creditos";
   }
 }
  if(diapositiva === "f1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "f2";
   }
 }
    if(diapositiva === "f2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "creditos";
   }
 }
  if(diapositiva === "g1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "g2";
   }
 }
  if(diapositiva === "g2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "g3";
   }
 }
  if(diapositiva === "g3"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "creditos";
   }
 }
  if(diapositiva === "h1"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "h2";
   }
 }
  if(diapositiva === "h2"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "h3";
   }
 }
  if(diapositiva === "h3"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "creditos";
   }
 }
  if(diapositiva === "creditos"){
   if(clickNext(120, 300, 100, 50)){
     diapositiva = "inicio";
   }
 }
}

function botton1(X, Y, W, H, textB) { // una función para dibujar zonas rectangulares
  if (clickNext(X, Y, W, H)) {
    fill(0, 255, 255);
  } else {
    fill(0, 255, 0);
  }
  rect(X, Y, W, H, H/4);
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  text(textB, X+W/2, Y+H/2);
}

function botton2(X, Y, W, H, textB) { // una función para dibujar zonas rectangulares
  if (clickOption(X, Y, W, H)) {
    fill(0, 255, 255);
  } else {
    fill(0, 255, 0);
  }
  rect(X, Y, W, H, H/4);
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  text(textB, X+W/2, Y+H/2);
}

function clickNext(X, Y, W, H) {
  return mouseX>X && mouseX<posX+W && mouseY>Y && mouseY<Y+H;
}

function clickOption(X, Y, W, H) {
  return mouseX>X && mouseX<posX+W && mouseY>Y && mouseY<Y+H;
}

function screen(image, text, X, Y, XB, YB, W, H, textB){
  image(image, 0, 0);
  fill(255);
  text(text, X, Y, width-W, height-H);
  botton1(XB, YB, W, H, textB);
}
