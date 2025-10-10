function mouseClicked(){
  sfx.amp(0.5);
  sfx.play();
 if(diapositiva === "inicio"){
   if(tap(100, 400, 110, 50)){
    diapositiva = "1";
  }
 }
 if(diapositiva === "1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "2";
   }
 }if(diapositiva === "2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "a1";
   }else if(tap(360, 400, 110, 50)){
     diapositiva = "b1";
   }
 }if(diapositiva === "a1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "a2";
   }
 }if(diapositiva === "a2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "a3";
   }
 }if(diapositiva === "a3"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "c1";
   }else if(tap(360, 400, 110, 50)){
     diapositiva = "d1";
   }
  }if(diapositiva === "b1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "b2";
   }
 }if(diapositiva === "b2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "e1";
   }else if(tap(360, 400, 110, 50)){
     diapositiva = "f1";
   }
 }if(diapositiva === "c1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "c2";
   }
 }if(diapositiva === "c2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "d1";
   }
 }if(diapositiva === "d1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "d2";
   }
 }if(diapositiva === "d2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "d3";
   }
 }if(diapositiva === "d3"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "d4";
   }
 }if(diapositiva === "d4"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "g1";
   }else if(tap(360, 400, 110, 50)){
     diapositiva = "h1";
   }
 }if(diapositiva === "e1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "e2";
   }
 }if(diapositiva === "e2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "creditos";
   }
 }if(diapositiva === "f1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "f2";
   }
 }if(diapositiva === "f2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "creditos";
   }
 }if(diapositiva === "g1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "g2";
   }
 }if(diapositiva === "g2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "g3";
   }
 }if(diapositiva === "g3"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "creditos";
   }
 }if(diapositiva === "h1"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "h2";
   }
 }if(diapositiva === "h2"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "h3";
   }
 }if(diapositiva === "h3"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "Fin";
   }
 }if(diapositiva === "Fin"){
   if(tap(100, 400, 110, 50)){
     diapositiva = "inicio";
   }
 }
}

function botton(X, Y, W, H, text){
  if(tap(X, Y, W,  H)){
    fill(255, 240, 0);
  }else{
    fill(0, 255, 0);
  }
  rect(X, Y, W, H);
  fill(0);
  textAlign(CENTER, CENTER);
  text(text, X + W/2, Y + H/2);
}

function tap(x, y, w, h){
  return mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h;
}
