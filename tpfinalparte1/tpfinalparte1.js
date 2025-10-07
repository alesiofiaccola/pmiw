//alesio fiaccola y dalia pastene
//comision 1

let screens = [];
let diapositiva = "inicio";
let phrases = ['dalia pastene-alesio fiaccola. comisión 1 - PMIW', 'el sr howard mira perplejo a los niños arrojar a michael por la ventana diciendole ¡te odiamos! y decide no volver a dar clases nunca más', 'un colega le dice que hay un cargo para cubrir en la escuela y le ofrece regresar',
'el sr howard se retrae en su casa escribienso sus poesías e historias para presentarlas', 'el desconfía de los niños y los aterroriza, siempre piensa que traman algo','no tiene exíto presentando lo que escribe en su pueblo por lo que debe tomar una decision',
'volviendo a casa ve a dos alumnos jugando','enferma y no puede pagar sus medicinas y lentamente su salud empeora', 'logró conseguir su primera oportunidad presentando tus historias y sus poesías, teniendo mucho exito', 'les pregunta enojado a que estan jugando', 'los niños le muestran el juego de los venenos',
'continúa hacia su casa pensando en el juego de los niños y odiándolos en silencio', 'ya es sabado. ve a los niños jugar frente a su ventana, sobre todo ve a una niña en la zanja jugando con una calavera. el sr howard sale furioso tras ella', 
'se tira sobre ella con intención de golpearla pero se detiene y la niña se va llorando','la niña le cuenta todo a su padre y a su hermano mayor, y estos persiguen al sr howard furiosos para golpearlo','malherido va hacia la acera de oak bay. donde no puede mantenerse de pie y se acuesta en el suelo',
'al día siguiente aterroriza a otros niños que estaban jugando en el mismo lugar y los persigue hasta oak bay', 'en la persecución el sr howard tropieza y cae en un pozo golpeandose la cabeza con una tubería y pierde la conciencia',
'muere enterrado', 'muere debido a los golpes recibidos por los familiares de la niña','muere en su cama debido a su enfermedad', 'próspero y con una vida nueva como escritor, el sr howard no volvió a ser profesor y se dedicó a su pasión'];

function setup() {
  createCanvas(640, 480);
  textSize(30);
}


function draw() {
  if(diapositiva === "inicio"){
    background(255);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 1"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 2"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }
   if(diapositiva === "pantalla 3A"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 3B"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 4A"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }
    if(diapositiva === "pantalla 4B"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }
   if(diapositiva === "pantalla 5C"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 6C"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 5D"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 6D"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
    if(diapositiva === "pantalla 7D"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }
   if(diapositiva === "pantalla 8G"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 9G"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 8H"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "pantalla 9H"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "final original"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
   if(diapositiva === "final alternativo 1"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
  if(diapositiva === "final alternativo 2"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
  if(diapositiva === "final alternativo 3"){
    background(200);
    fill(0);
    text(diapositiva, 200, 200);
    fill(255, 0, 0);
    rect(120, 300, 100, 50);
    rect(360, 300, 100, 50);
    clickNext(120, 300, 100, 50);
  }
}

function botton1(X, Y, tamX, tamY, textB){
  if(inBotton(X, Y, tamX, tamY)){
    fill(255, 0 ,255);
  }else{
    fill(0, 255, 255);
  }
  rect(X, Y, tamX, tamY);
}

function botton1(X, Y, tamX, tamY, textB){
  if(inBotton1(X, Y, tamX, tamY)){
    fill(0, 255 ,255);
  }else{
    fill(0, 255, 255);
  }
  rect(X, Y, tamX, tamY);
}

function botton2(X, Y, tamX, tamY, textB){
  if(inBotton2(X, Y, tamX, tamY)){
    fill(0, 255 ,255);
  }else{
    fill(0, 255, 255);
  }
  rect(X, Y, tamX, tamY);
}

function mouseClicked(){
  //pantallas de un solo boton
  if(diapositiva === "inicio"){
    siguiente("inicio", "pantalla 1");
  }else if(diapositiva === "pantalla 1"){
    siguiente("pantalla 1", "pantalla 2");
  }else if(diapositiva === "pantalla 2"){
    bifurcacion("pantalla 2","pantalla 3A","pantalla 3B");
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }else if(diapositiva === "pantalla 3A"){
    siguiente("pantalla 3A", "pantalla 4A");
  }else if(diapositiva === "pantalla 4A"){
    bifurcacion("pantalla 4A","pantalla 5C", "pantalla 5D");
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }else if(diapositiva === "pantalla 3B"){
    siguiente("pantalla 3B", "pantalla 4B");
  } else if(diapositiva === "pantalla 4B"){
    bifurcacion("pantalla 4B","pantalla 5E","pantalla 5F");
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }else if(diapositiva === "pantalla 5C"){
    siguiente("pantalla 5C","pantalla 6C");
  } else if(diapositiva === "pantalla 5D"){
    siguiente("pantalla 5D", "pantalla 6D");
  }else if(diapositiva === "pantalla 6D"){
    siguiente("pantalla 6D","pantalla 7D");
  } else if(diapositiva === "pantalla 7D"){
    bifurcacion("pantalla 7D","pantalla 8G","pantalla 8H");
    clickNext(120, 300, 100, 50);
    clickOption(360, 300, 100, 50);
  }else if(diapositiva === "pantalla 8G"){
    siguiente("pantalla 8G","pantalla 9G");
  }else if(diapositiva === "pantalla 8H"){
    siguiente("pantalla 8H","pantalla 9H");
  }
  
  //finales
  if(diapositiva === "pantalla 9G"){
    siguiente("pantalla 9G", "final original");
  }else if(diapositiva === "pantalla 9H"){
    siguiente("pantalla 9H", "final alternativo 1");
  }else if(diapositiva === "pantalla 5E"){
    siguiente("pantalla 5E", "final alternativo 2");
  }else if(diapositiva === "pantalla 5F"){
    siguiente("pantalla 5F", "final alternativo 3");
  }
  
  //volver al inicio
  if(diapositiva === "final original"){
    siguiente("final original","inicio");
  }else if(diapositiva === "final alternativo 1"){
    siguiente("final alternativo 1","inicio");
  }else if(diapositiva === "final alternativo 2"){
    siguiente("final alternativo 2","inicio");
  }else if(diapositiva === "final alternativo 3"){
    siguiente("final alternativo 3","inicio");
  }
}


function clickNext(X, Y, W, H){
  return mouseX> X && mouseX< X+W && mouseY> Y && mouseY< Y+H;
}

function clickOption(X, Y, W, H){
  return mouseX> X && mouseX< X+W && mouseY> Y && mouseY< Y+H;
}

function siguiente(currentScreen, nextScreen){
  clickNext(120, 300, 100, 50);
  if(diapositiva === currentScreen){
    if(clickNext(120, 300, 100, 50)){
      diapositiva = nextScreen;
    }
  }
}

function bifurcacion(currentScreen, firstOption, secondOption){
  clickOption(360, 300, 100, 50);
  if(diapositiva === currentScreen){
    if(clickNext(120, 300, 100, 50)){
      diapositiva = firstOption;
    }else if(clickOption(360, 300, 100, 50)){
      diapositiva = secondOption;
    }
  }
}
