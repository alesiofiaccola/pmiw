function mouseClicked(){
  sfx.amp(0.5);
  sfx.play();
  print("Click detectado en:", mouseX, mouseY);
  //inicio
  if (diapositiva === "inicio" && tap(100, 400, 110, 50)){
  diapositiva = "1";
  }
  
  //linea principal
  else if (diapositiva === "1" && tap(100, 400, 110, 50)){
  diapositiva = "2";
  }
  else if (diapositiva === "2" && tap(100, 400, 110, 50)) {
    diapositiva = "a1";
  }
  else if (diapositiva === "2" && tap(360, 400, 110, 50)){ 
    diapositiva = "b1";
  }
  
  //rama a
    else if (diapositiva === "a1" && tap(100, 400, 110, 50)){
     diapositiva = "a2";
    }
    else if (diapositiva === "a2" && tap(100, 400, 110, 50)) {
      diapositiva = "a3";
    }
    else if (diapositiva === "a3" && tap(100, 400, 110, 50)) { 
      diapositiva = "c1";
    }
    else if (diapositiva === "a3" && tap(360, 400, 110, 50)){ 
    diapositiva = "d1";
  }
  
  //rama b
  else if (diapositiva === "b1" && tap(100, 400, 110, 50)){
    diapositiva = "b2";
  }
  else if (diapositiva === "b2" && tap(100, 400, 110, 50)){
     diapositiva = "e1";
  }
  else if (diapositiva === "b2" && tap(360, 400, 110, 50)) {
    diapositiva = "f1";
  }
  
  //rama c
  else if (diapositiva === "c1" && tap(100, 400, 110, 50)){
    diapositiva = "c2";
  }
  else if (diapositiva === "c2" && tap(100, 400, 110, 50)){
  diapositiva = "d1";
  }

  //rama d
  else if (diapositiva === "d1" && tap(100, 400, 110, 50)) {
    diapositiva = "d2";
  }
  else if (diapositiva === "d2" &&tap(100, 400, 110, 50)){ 
    diapositiva = "d3";
  }
  else if (diapositiva === "d3" && tap(100, 400, 110, 50)){
    diapositiva = "d4";
  }
  else if (diapositiva === "d4" && tap(100, 400, 110, 50)){
    diapositiva = "g1";   
  } 
  else if (diapositiva === "d4" && tap(360, 400, 110, 50)) {
    diapositiva = "h1";
  }
  
  //rama e
  else if (diapositiva === "e1" && tap(100, 400, 110, 50)) {
      diapositiva = "e2";
  }
  else if (diapositiva === "e2" && tap(100, 400, 110, 50)){
    diapositiva = "creditos";
  }
  
  //rama f
   else if (diapositiva === "f1" && tap(100, 400, 110, 50)) {
      diapositiva = "f2";
  }
  else if (diapositiva === "f2" && tap(100, 400, 110, 50)) {
    diapositiva = "creditos";
  }
  
  //rama g
  else if (diapositiva === "g1" && tap(100, 400, 110, 50)) {
      diapositiva = "g2";
  }
  else if (diapositiva === "g2" && tap(100, 400, 110, 50)) {
    diapositiva = "g3";
  }
  else if (diapositiva === "g3" && tap(100, 400, 110, 50)) {
    diapositiva = "creditos";
  }
  
  
  else if (diapositiva === "h1" && tap(100, 400, 110, 50)) {
    diapositiva = "h2";
  }
  else if (diapositiva === "h2" && tap(100, 400, 110, 50)) {
    diapositiva = "h3";
  }
   else if (diapositiva === "h3" && tap(100, 400, 110, 50)) {
    diapositiva = "creditos";
  }
  else if ((diapositiva === "creditos" || diapositiva === "volver a iniciar") && tap(100, 400, 110, 50)) {
    diapositiva = "inicio";
  }
 }

function botton(X, Y, W, H, textoBoton) {
  if (tap(X, Y, W, H)){
  fill(255, 240, 0);
 }else {
  fill(0, 255, 0);
 }

  rect(X, Y, W, H);
  fill(0);
  textAlign(CENTER, CENTER);
  text(textoBoton, X + W / 2, Y + H / 2);
}

function tap(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}
