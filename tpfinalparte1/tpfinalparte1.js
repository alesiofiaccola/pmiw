//alesio fiaccola y dalia pastene
//comision 1
//https://www.youtube.com/watch?v=CLSnQSpwL5o

let screens = [];
let diapositiva = "inicio";
let musica;
let sfx;
let phrases = ['bienvenidos',
'el sr howard mira a los niños arrojar a michael por la ventana y decide no volver a dar clases nunca más',
'un colega le dice que hay un cargo para cubrir en la escuela y le ofrece regresar',
'el profesor mira hacia la escuela desconfiado', 
'los alumnos ven al señor howard regresando al salón',
'caminando ve a unos niños jugando a un juego extraño',
'se retiene en su casa escribiendo poesías e historias para presentarlas en el pueblo',
'no está teniendo éxito con que escribe, ahora debe decidir',
'les pregunta enojado a que están jugando ¿que están haciendo?',
'los niños le muestran el juego de los venenos, un juego donde hay que saltar por encima de una baldoza con el nombre de una persona muerta. si salta sobre la tumba cae y muere', 
'camina hacia su casa odiando a los niños en silencio', 
'ya es sábado, frente a su ventana ve a unos niños jugando y a una niña en una zanja jugando a la calavera',
'furioso sale de su casa tras la niña',
'se abalanza sobre la niña con intención de golpearla, pero se detiene y la niña se va llorando',
'enferma y no puede pagar sus medicinas, por lo que su salud empeora',
'muere en su cama debido a su enfermedad','logró conseguir una oportunidad para presentar sus historias y poesías',
'próspero y, el señor howard tiene una nueva vida exitosa como escritor',
'al día siguiente aterroriza a los otros niños persiguiéndolos hasta la calle Oak Bay',
'tropieza y cae en un pozo, golpeándose la cabeza con una tubería',
'muere enterrado y los niños saltan sobre la baldoza con su nombre escrito', 
'tras lo que contó la niña, su padre y su hermano van directo al señor howard para golpearlo fuertemente',
'malherido, el sr howard camina por la calle Oak Bay y se acuesta en el suelo',
'muere debido a los golpes recibidos por la familia de la niña','gracias por todo'];

function preload(){
  screens[0] = loadImage('data/img1.jpg');
  screens[1] = loadImage('data/img2.jpg');
  screens[2] = loadImage('data/img3.jpg');
  screens[3] = loadImage('data/imga1.jpg');
  screens[4] = loadImage('data/imga2.jpg');
  screens[5] = loadImage('data/imga3.jpg');
  screens[6] = loadImage('data/imgb1.jpg');
  screens[7] = loadImage('data/imgb2.jpg');
  screens[8] = loadImage('data/imgc1.jpg');
  screens[9] = loadImage('data/imgc2.jpg');
  screens[10] = loadImage('data/imgd1.jpg');
  screens[11] = loadImage('data/imgd2.jpg');
  screens[12] = loadImage('data/imgd3.jpg');
  screens[13] = loadImage('data/imgd4.jpg');
  screens[14] = loadImage('data/imge1.jpg');
  screens[15] = loadImage('data/imge2.jpg');
  screens[16] = loadImage('data/imgf1.jpg');
  screens[17] = loadImage('data/imgf2.jpg');
  screens[18] = loadImage('data/imgg1.jpg');
  screens[19] = loadImage('data/imgg2.jpg');
  screens[20] = loadImage('data/imgg3.jpg');
  screens[21] = loadImage('data/imgh1.jpg');
  screens[22] = loadImage('data/imgh2.jpg');
  screens[23] = loadImage('data/imgh3.jpg');
  screens[24] = loadImage('data/imgcreditos.jpg');
  musica = loadSound('data/musica.mp3');
  sfx = loadSound('data/whoosh.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(16);
  musica.amp(0.5);
  musica.play();
}


function draw() {
  print("Diapositiva actual en draw:", diapositiva);
  background(0);
  if(diapositiva === "inicio"){
    image(screens[0], 0, 0);
    fill(255);
    text(phrases[0], 300, 380);
    botton(100, 400, 110, 50, "comenzar");
  }
   if(diapositiva === "1"){
    image(screens[1], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[1], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "2"){
    image(screens[2], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[2], 90, 310, 440, 80);
    botton(90, 400, 130, 50, "vuelve al colegio");
    botton(320, 400, 150, 50, "no vuelve al colegio");
  }
   if(diapositiva === "a1"){
    image(screens[3], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[3], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "a2"){
    image(screens[4], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[4], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "a3"){
    image(screens[5], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[5], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "se detiene");
    botton(360, 400, 110, 50, "los ignora");
  }
   if(diapositiva === "b1"){
    image(screens[6], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[6], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "b2"){
    image(screens[7], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[7], 90, 310, 440, 80);
    botton(75, 400, 160, 50, "se queda en el pueblo");
    botton(330, 400, 170, 50, "se muda a otro pueblo");
  }
   if(diapositiva === "c1"){
    image(screens[8], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[8], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "c2"){
    image(screens[9], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[9], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "d1"){
    image(screens[10], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[10], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "d2"){
    image(screens[11], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[11], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "d3"){
    image(screens[12], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[12], 90, 310, 440, 80);
    botton(100, 400, 100, 50, "siguiente");
  }
   if(diapositiva === "d4"){
    image(screens[13], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[13], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "entra a su casa");
    botton(350, 400, 130, 50, "se queda mirando");
  }
   if(diapositiva === "e1"){
    image(screens[14], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[14], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "e2"){
    image(screens[15], 0, 0);
    fill(0, 150);
    rect(80, 320, 460, 80, 10);
    fill(255);
    text(phrases[15], 90, 320, 440, 80);
    botton(100, 400, 110, 50, "Fin");
  }
   if(diapositiva === "f1"){
    image(screens[16], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[16], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "f2"){
    image(screens[17], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[17], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Fin");
  }
   if(diapositiva === "g1"){
    image(screens[18], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[18], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "g2"){
    image(screens[19], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[19], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "g3"){
    image(screens[20], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[20], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Fin");
  }
   if(diapositiva === "h1"){
    image(screens[21], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[21], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "h2"){
    image(screens[22], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[22], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "siguiente");
  }
   if(diapositiva === "h3"){
    image(screens[23], 0, 0);
    fill(0, 150);
    rect(80, 300, 460, 100, 10);
    fill(255);
    text(phrases[23], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "Fin");
  }
  if(diapositiva === "creditos"){
    image(screens[24], 0, 0);
    fill(255);
    text(phrases[24], 90, 310, 440, 80);
    botton(100, 400, 110, 50, "volver a iniciar");
  }
}
