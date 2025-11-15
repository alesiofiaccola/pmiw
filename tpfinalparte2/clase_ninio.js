class Ninio {
  constructor(pisoY) {
    this.x = width/2;
    this.y = pisoY;
    this.w = 55;
    this.h = 60;
    this.velY = 0;
    this.gravedad = 0.5;
    this.enSuelo = true;
  }
  
  actualizar(hoyos, pisoY){
    this.velY += this.gravedad;
    this.y += this.velY;
    
    for(let Hoyo of hoyos){
      if(Hoyo.x - this.x < 50 && Hoyo.x - this.x > 0 && this.enSuelo){
        this.saltar();
      }
    }
    
    let sobreHoyo = false;
    for(let Hoyo of hoyos){
      if(this.x + this.w > Hoyo.x && this.x < Hoyo.x + Hoyo.anchura){
        sobreHoyo = true;
        break;
      }
    }
    
    if(!sobreHoyo && this.y >= pisoY){
      this.y = pisoY;
      this.velY = 0;
      this.enSuelo = true;
    }else if(this.y < pisoY){
      this.enSuelo = false;
    }
  }
  
  saltar(){
    if(this.enSuelo){
      this.velY = -12;
      this.enSuelo = false;
    }
  }
  
  
  dibujarNinio() {
    image(imgNinio,this.x, this.y - this.h, this.w, this.h);
  }
}
