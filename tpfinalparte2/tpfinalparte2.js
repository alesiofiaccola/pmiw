//alesio fiaccola y dalia pastene
//comision 1

let estado = "inicio";
let game;
let imginicio;
let fondoJuego;
let imgPiso;
let imgNinio;
let imgHoward;
let sonidoSalto;
let sonidoDerrota;
let sonidoVictoria;

function preload(){
  imginicio = loadImage('data/intro.jpg');
  fondoJuego = loadImage('data/fondojuego.jpg');
  imgPiso = loadImage('data/piso.jpg');
  imgNinio = loadImage('data/child.png');
  imgHoward = loadImage('data/howard.png');
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
  }else if(estado === "enJuego"){
    image(fondoJuego, 0, 0, width, height);
    game.actualizar();
    game.display();
  }
}

function pantallaInicio(){
  image(imginicio, 0, 0);
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text("Howard´s falling", width/2, 50);
  fill(255);
  fill(0, 140);
  rect(110, 130, 420, 230);
  fill(255);
  textSize(26);
  text("el sr howard no debe caer en los hoyos. para saltar presiona s, si el sr howard cae en un hoyo pierdes, pero si aguanta 60 segundos sin caer ganas para reiniciar presiona r", 120, 140, 400, 210);
  textSize(22);
  text("presiona ENTER para comenzar", width/2, 420);
}

function keyPressed(){
  if(estado === "inicio" && keyCode === ENTER){
    estado = "enJuego";
    game = new Game();
    return;
  }
  
  if(estado === "enJuego"){
    if(key === "s" || key === "S"){
      game.howard.saltar();
    }
    if(key === "r" || key === "R"){
      game.reiniciar();
    }
  }
}

