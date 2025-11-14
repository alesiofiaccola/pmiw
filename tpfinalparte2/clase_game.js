class Game{
  constructor(){
    this.y = height - 75;
    this.howard = new Howard(75, this.y);
    this.ninio = new Ninio(this.y);
    this.hoyos = [];
    this.tiempoJuego = 60;
    this.tiempo = millis();
    this.gameOver = false;
    this.victoria = false;
    this.piso = new Piso(0, this.y);
    this.generarHoyos();
  }
  
  generarHoyos(){
    this.hoyos = [];
    for(let x = 200; x < width*2; x += (300,500)){
      this.hoyos.push(new Hoyo(x, this.y));
    }
  }
  
  actualizar(){

    // ─────────────────────────────
    // SI EL JUEGO TERMINÓ, NO SE ACTUALIZA MÁS
    // ─────────────────────────────
    if(this.gameOver){
      return;
    }
    
    // Mover hoyos
    for(let Hoyo of this.hoyos){
      Hoyo.mover();
    }
    
    this.piso.actualizar();
    this.howard.actualizar(this.hoyos, this.y);
    this.ninio.actualizar(this.hoyos, this.y);

    // ─────────────────────────────
    // CONDICIÓN DE DERROTA
    // ─────────────────────────────
    if(this.howard.y > height){
      sonidoDerrota.play();
      this.gameOver = true;
      this.victoria = false;
    }

    // ─────────────────────────────
    // CONDICIÓN DE VICTORIA
    // ─────────────────────────────
    let finish = (millis() - this.tiempo) / 1000;
    if(finish >= this.tiempoJuego){
      sonidoVictoria.play();
      this.gameOver = true;
      this.victoria = true;
    }
  }
  
  display(){
    this.piso.dibujarPiso();
    
    for(let Hoyo of this.hoyos){
      Hoyo.dibujarHoyo();
    }
    
    this.howard.dibujarHoward();
    this.ninio.dibujarNinio();
    
    // Cronómetro
    let tiempoRestante = max(0, this.tiempoJuego - (millis() - this.tiempo)/ 1000);
    fill(255);
    textAlign(LEFT);
    textSize(24);
    text("Tiempo: " + tiempoRestante.toFixed(1), 20, 30);
    
    
    if(this.gameOver){
      if(this.victoria){
        image(imgGanaste, 0, 0, width, height);
        game.pantallaVictoria();
      } else{
        image(imgPerdiste, 0, 0, width, height);
      }
    }
  }
  
  pantallaVictoria(){
    fill(255);
    textAlign(CENTER);
    textSize(28);
    text('Presiona R para volver a jugar', width/2, height - 60);
  }
  
  reiniciar(){
    this.howard = new Howard(75, this.y);
    this.ninio = new Ninio(this.y);
    this.piso = new Piso(0, this.y);
    this.tiempo = millis();
    this.gameOver = false;
    this.victoria = false;
    this.generarHoyos();
  }
}
