function quads(X1, X2, Y1, Y2, X3, X4, Y3, Y4){
   let tam = 100;
   let cant = 10;
   let colourV = 0;
   
   if(colourVibrant){ //c
    colourV = int(map(sin(frameCount),-1, 1, 0, 255));  
  }else{
    colourV=0;
  }
  
   if(mirror){//y
    colourV= 255;
  }
  
    if(random){//o
    colourV = (20, 50);
  }
  
   if(rotation){//r
    rotate(radians(frameCount*2));
    dist(380, -20, 440, 880);// distancia entre los extremos de la alfombra
    fill(200);
    rect(380, -20, 440, 440 );
  }
   
   for(i=0; i< cant; i++){
     if(i%2 == 0){
       fill(255 - colourV);
     }else{
       fill(colourV);
     }
     rect(X1 + i*10, Y2 + i%2, tam - i*10, tam - i*10);
     rect(X2 + i%2, Y1 + i*10, tam - i*10, tam -i*10);
     
     rect(X3 + i*10, Y2 + i%2, tam - i*10, tam - i*10);
     rect(X4 + i%2, Y1 + i*10, tam - i*10, tam -i*10);
     
     rect(X1 + i*10, Y4 + i%2, tam - i*10, tam - i*10);
     rect(X2 + i%2, Y3 + i*10, tam - i*10, tam -i*10);
     
     rect(X3 + i*10, Y4 + i%2, tam - i*10, tam - i*10);
     rect(X4 + i%2, Y3 + i*10, tam - i*10, tam -i*10);
   
   if(chromatics){//g
     fill(255, 0 , 0);
     rect(X1, Y2, tam,tam);
     
     fill(255, 80, 0);
     rect(X1, Y4, tam, tam);
     
     fill(255, 125, 0);
     rect(X2, Y1, tam, tam);
     
     fill(255, 195, 0);
     rect(X2, Y3, tam, tam);
     
     fill(255, 255 , 0);
     rect(X3, Y2, tam,tam);
     
     fill(215, 255, 0);
     rect(X3, Y4, tam, tam);
     
     fill(110, 255, 0);
     rect(X4, Y1, tam, tam);
     
     fill(0, 255, 0);
     rect(X4, Y3, tam, tam);
   }
   
     if(i%2 == 0){
       fill(colourV);
     }else{
       fill(255 - colourV);
     }
     rect(X1 + i*10, Y1 + i*10, tam - i*10, tam - i*10);
     rect(X2 + i%2, Y2 + i%2, tam - i*10, tam -i*10);
     
     rect(X3 + i*10, Y1 + i*10, tam - i*10, tam - i*10);
     rect(X4 + i%2, Y2 + i%2, tam - i*10, tam -i*10);
     
     rect(X1 + i*10, Y3 + i*10, tam - i*10, tam - i*10);
     rect(X2 + i%2, Y4 + i%2, tam - i*10, tam -i*10);
     
     rect(X3 + i*10, Y3 + i*10, tam - i*10, tam - i*10);
     rect(X4 + i%2, Y4 + i%2, tam - i*10, tam -i*10);
   }
   
    if(blues){
     fill(0, 0 , 255);
     rect(X1, Y1, tam,tam);
     fill(0, 45, 255);
     rect(X1, Y3, tam, tam);
     fill(0, 75, 255);
     rect(X2, Y2, tam, tam);
     fill(0, 125, 255);
     rect(X2, Y4, tam, tam);
     fill(0, 160, 255);
     rect(X3, Y1, tam,tam);
     fill(0, 185, 255);
     rect(X3, Y3, tam, tam);
     fill(0, 225, 255);
     rect(X4, Y2, tam, tam);
     fill(0, 255, 255);
     rect(X4, Y4, tam, tam);
   }
 }
 
function reiniciar(){
   rotation = false;
   colourVibrant = false;
   mirror = false;
   random = false;
   chromatics = false;
   blues = false;
}
