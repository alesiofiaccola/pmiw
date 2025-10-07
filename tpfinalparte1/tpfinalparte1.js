//alesio fiaccola y dalia pastene
//comision 1

let screens = [];
let diapositiva = "0";
let cantidad = 25
let phrases = ['bienvenidos','el sr howard mira perplejo a los niños arrojar a michael por la ventana y decide no volver a dar clases nunca más', 'un colega le dice que hay un cargo para cubrir en la escuela y le ofrece regresar', 'el profesor mira hacia laescuela desconfiado', 'los alumnos ven al señor howard regresando al salón',
'caminando ve a unos niños jugando a un juego extraño', 'se retiene en su casa escribiendo poesías e historias para presentarlas en el pueblo', 'no está teniendo éxito presentando lo que escribe, ahora debe decidir','les pregunta enojado a que están jugando ¿que están haciendo?',
'los niños le muestran el juego de los venenos, un juego donde hay que saltar por encima de una baldoza con el nombre de una persona muerta. si salta sobre la tumba cae y muere', 'camina hacia su casa odiando a los niños en silencio', 'ya es sábado, frente a su ventana ve a unos niños jugando y a una niña en una zanja jugando a la calavera',
'furioso sale da su casa tras la niña', 'se abalanza sobre la niña con intención de golpearla, pero se detiene y la niña se va llorando', 'enferma y no puede pagar sus medicinas, por lo que su salud empeora', 'muere en su cama debido a su enfermedad', 'logró conseguir una oportunidad para presentar sus historias y poesías',
'próspero y, el señor howard tiene una nueva vida exitosa como escritor', 'al día siguiente aterroriza a los otros niños persiguiéndolos hasta la calle Oak Bay','tropieza y cae en un pozo, golpeándose la cabeza con una tubería','muere enterrado y los niños saltan sobre la baldoza con su nombre escrito', 'tras lo que contó la niña, su padre y su hermano van directo al señor howard para golpearlo fuertemente',
'malherido, el sr howard camina por la calle Oak Bay y se acuesta en el suelo', 'muere debido a los golpes recibidos por la familia de la niña','gracias por todo'];

function preload(){
  for(let i=0; i<cantidad; i++){
    screens[i]= loadImage('data/file'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(25);
}


function draw() {
  background(0);
   botton1(120, 300, 100, 50, "siguiente");
   
  if(diapositiva === "0"){
    screen(screens[0], phrases[0], 100, 100, 200, 300, 100, 50, "intro");
  }
   if(diapositiva === "1"){
    screen(screens[1], phrases[1], 100, 100, 200, 300, 100, 50, "img2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "2"){
    screen(screens[2], phrases[2], 100, 100, 200, 300, 100, 50, "img3");
    botton1(120, 300, 100, 50, "vuelve al colegio");
    botton2(360, 300, 100, 50, "no vuelve al colegio");
  }
   if(diapositiva === "a1"){
    screen(screens[3], phrases[3], 100, 100, 200, 300, 100, 50, "a1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "a2"){
    screen(screens[4], phrases[4], 100, 100, 200, 300, 100, 50, "a2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "a3"){
    screen(screens[5], phrases[5], 100, 100, 200, 300, 100, 50, "a3");
    botton1(120, 300, 100, 50, "se detiene");
    botton2(360, 300, 100, 50, "los ignora");
  }
   if(diapositiva === "b1"){
    screen(screens[6], phrases[6], 100, 100, 200, 300, 100, 50, "b1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "b2"){
    screen(screens[7], phrases[7], 100, 100, 200, 300, 100, 50, "b2");
    botton1(120, 300, 100, 50, "se queda en el pueblo");
    botton2(360, 300, 100, 50, "se muda a otro pueblo");
  }
   if(diapositiva === "c1"){
    screen(screens[8], phrases[8], 100, 100, 200, 300, 100, 50, "c1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "c2"){
    screen(screens[9], phrases[9], 100, 100, 200, 300, 100, 50, "c2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "d1"){
    screen(screens[10], phrases[10], 100, 100, 200, 300, 100, 50, "d1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "d2"){
    screen(screens[11], phrases[11], 100, 100, 200, 300, 100, 50, "d2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "d3"){
    screen(screens[12], phrases[12], 100, 100, 200, 300, 100, 50, "d3");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "d4"){
    screen(screens[13], phrases[13], 100, 100, 200, 300, 100, 50, "d4");
    botton1(120, 300, 100, 50, "entra a su casa");
    botton2(360, 300, 100, 50, "se queda mirando el piso");
  }
   if(diapositiva === "e1"){
    screen(screens[14], phrases[14], 100, 100, 200, 300, 100, 50, "e1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "e2"){
    screen(screens[15], phrases[15], 100, 100, 200, 300, 100, 50, "e2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "f1"){
    screen(screens[16], phrases[16], 100, 100, 200, 300, 100, 50, "f1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "f2"){
    screen(screens[17], phrases[17], 100, 100, 200, 300, 100, 50, "f2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "g1"){
    screen(screens[18], phrases[18], 100, 100, 200, 300, 100, 50, "g1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "g2"){
    screen(screens[19], phrases[19], 100, 100, 200, 300, 100, 50, "g2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "g3"){
    screen(screens[20], phrases[20], 100, 100, 200, 300, 100, 50, "g3");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "h1"){
    screen(screens[21], phrases[21], 100, 100, 200, 300, 100, 50, "h1");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "h2"){
    screen(screens[22], phrases[22], 100, 100, 200, 300, 100, 50, "h2");
    botton1(120, 300, 100, 50, "siguiente");
  }
   if(diapositiva === "h3"){
    screen(screens[23], phrases[23], 100, 100, 200, 300, 100, 50, "h3");
    botton1(120, 300, 100, 50, "siguiente");
  }
  if(dispositiva === "creditos"){
    screen(screens[24], phrases[24], 100, 100, 200, 300, 100, 50, "creditos");
    botton1(120, 300, 100, 50, "volver a iniciar");
  }
}
