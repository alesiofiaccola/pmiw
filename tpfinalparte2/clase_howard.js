class Howard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 90;
    this.h = 110;
    this.velY = 0;
    this.gravedad = 0.5;
    this.enSuelo = true;
  }

  dibujarHoward(){
    fill(50, 100, 200);
    image(imgHoward,this.x, this.y - this.h, this.w, this.h);
  }
  
  actualizar(hoyos, pisoY){
    this.velY += this.gravedad;
    this.y += this.velY;
    
    let sobreHoyo = false;
    for(let Hoyo of hoyos){
      if(this.x + this.w > Hoyo.x + 70 && this.x < Hoyo.x + Hoyo.anchura - 20){
        sobreHoyo = true;
        break;
      }
    }
    
    if(!sobreHoyo && this.y >= pisoY){
      this.y = pisoY
      this.velY += 0;
      this.enSuelo = true;
    }else if(this.y >= pisoY){
      this.enSuelo = false;
    }
  }
  
  saltar() {
    sonidoSalto.play();
    if(this.enSuelo){
      this.velY = -12;
      this.enSuelo = false;
    }
  } 
}

