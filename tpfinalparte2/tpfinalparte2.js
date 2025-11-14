//alesio fiaccola y dalia pastene
//comision 1

let estado = "inicio";
let game;
let imginicio;
let fondoJuego;
let imgPiso;
let imgNinio;
let imgHoward;
let imgHoyo;
let imgGanaste;
let imgPerdiste;
let sonidoSalto;
let sonidoDerrota;
let sonidoVictoria;

function preload(){
  imginicio = loadImage('data/intro.png');
  fondoJuego = loadImage('data/fondojuego.jpg');
  imgPiso = loadImage('data/piso.jpg');
  imgNinio = loadImage('data/child.png');
  imgHoward = loadImage('data/howard.png');
  imgHoyo = loadImage('data/hoyo.jpg');
  imgGanaste = loadImage('data/ganaste.jpg');
  imgPerdiste = loadImage('data/perdiste.jpg');
  sonidoSalto = loadSound('data/jump.mp3');
  sonidoDerrota = loadSound('data/gameover.mp3');
  sonidoVictoria = loadSound('data/victory.mp3');
}

function setup() {
  createCanvas (640,480);
  game = new Game();
}

function draw() {
  background(245);
  if(estado === "inicio"){
    pantallaInicio();
  }
  else if(estado === "enJuego"){
    image(fondoJuego, 0, 0, width, height);
    game.actualizar();
    game.display();
  
  if(game.gameOver){
    estado = "gameOver";
  }
  }
  else if(estado === "gameOver"){
    pantallaGameOver();
  }
}

function pantallaInicio() {
  image(imginicio, 0, 0);
  fill(255);
  fill(255);
  fill(0, 140);
  rect(110, 300, 420, 100);
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text('El Sr Howard no debe caer en los hoyos, para saltar presiona W, aguanta 60 segundos sin caer para ganar. REINICIA CON R', 130, 320, 420, 100);
  textSize(22);
  text('ENTER para comenzar', width/2, 420);
  textSize(12);
  text('Alesio Fiacola, Dalia Pastene (COMISIÓN 1)', 20, 450);
}

function pantallaGameOver(){
  if(game.victoria){
    image(imgGanaste, 0, 0, width, height);
  }else{
    image(imgPerdiste, 0, 0, width, height);
  }
  fill(255);
  textAlign(CENTER);
  textSize(28);
  text('Presiona R para volver a jugar', width/2, height - 60);
}

function keyPressed(){
  if(estado === "inicio" && keyCode === ENTER){
    estado = "enJuego";
    game = new Game();
    return;
  }
  
  if(estado === "enJuego"){
    if(key === "w" || key === "W"){
      game.howard.saltar();
    }
  }
    
  if (estado === "gameOver") {
    if(key === "r" || key === "R"){
    game = new Game();
    estado = "enJuego";
   }
  }
}
