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
    for(let x = 200; x < width*2; x +=400){
      this.hoyos.push(new Hoyo(x, this.y));
    }
  }
  
  actualizar(){
    if(this.gameOver){
      return;
    }
    
    for(let Hoyo of this.hoyos){
      Hoyo.mover();
    }
    
    this.piso.actualizar();
    this.howard.actualizar(this.hoyos, this.y);
    this.ninio.actualizar(this.hoyos, this.y);
    
    if(this.howard.y > height){
      this.gameOver = true;
      this.victoria = false;
    }
    
    let finish = (millis() - this.tiempo) / 1000;
    if(finish >= this.tiempoJuego){
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
    this.ninio.dibujarNinio()
    
    let tiempoRestante = max(0, this.tiempoJuego - (millis() - this.tiempo)/ 1000);
    fill(0);
    textAlign(LEFT);
    textSize(24);
    text("tiempo:" + tiempoRestante.toFixed(1), 20, 30);
    
    if(this.gameOver){
      fill(0);
      textAlign(CENTER);
      textSize(40);
      text(this.victoria ? "has ganado" : "has perdido", width/2, height/2);
      fill(0);
      textSize(22);
      text("presiona R para volver a jugar", width/2, height/2 + 40);
    }
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
