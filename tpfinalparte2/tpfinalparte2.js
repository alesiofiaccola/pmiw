//alesio fiaccola y dalia pastene
//comision 1

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
  if(game.estado === "inicio"){
    game.pantallaInicio();
  }
  else if(game.estado === "enJuego"){
    game.actualizar();
    game.display();
  
  if(game.gameOver){
    game.estado = "gameOver";
  }
  }
  else if(game.estado === "gameOver"){
    game.pantallaGameOver();
  }
}

function keyPressed(){
  if(game.estado === "inicio" && keyCode === ENTER){
    game.estado = "enJuego";
    game.reiniciar();
    return;
  }
  
  if(game.estado === "enJuego"){
    if(key === "w" || key === "W"){
      game.howard.saltar();
    }
  }
    
  if (game.estado === "gameOver") {
    if(key === "r" || key === "R"){
    game = new Game();
    game.estado = "enJuego";
   }
  }
}
