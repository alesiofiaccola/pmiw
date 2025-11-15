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

  dibujarHoward() {
    if (typeof imgHoward !== 'undefined' && imgHoward) {
      image(imgHoward, this.x, this.y - this.h, this.w, this.h);
    } else {
      fill(50, 100, 200);
      rect(this.x, this.y - this.h, this.w, this.h);
    }
   }
  
  actualizar(hoyos, pisoY) {
    this.velY += this.gravedad;
    this.y += this.velY;

    if (this.y - this.h < 0) {
      this.y = this.h;
      this.velY = 0;
    }

    let piesX1 = this.x + 15;
    let piesX2 = this.x + this.w - 20;
    let sobreHoyo = false;

    for (let Hoyo of hoyos) {
      if (piesX2 > Hoyo.x + 2 && piesX1 < Hoyo.x + Hoyo.anchura) {
        sobreHoyo = true;
        break; // al toque te corta el ciclo for cuando detecta un hoyo
      }
    }

    // si no está sobre un hoyo y toca el piso es porque está en el suelo
    if (!sobreHoyo && this.y >= pisoY) {
      this.y = pisoY;
      this.velY = 0;
      this.enSuelo = true;
    }else if(!sobreHoyo && this.y > pisoY - 10){
      this.y = pisoY;
      this.velY = 0;
      this.enSuelo = true;
    } else {
      this.enSuelo = false;
    }
    
    if (this.y > height) {
      if (game.estado !== "gameOver") {
        sonidoDerrota.play();
      }
      game.estado = "gameOver";
    }
  }
  
    saltar() {
    if (this.enSuelo) {
      if (typeof sonidoSalto !== 'undefined' && sonidoSalto && sonidoSalto.play) {
        try {
          sonidoSalto.play();
        } catch (error) {
          // el catch sirve para ignorar el error si no hay sonido y que no se rompa todo
        }
      }
      this.velY = -12;
      this.enSuelo = false;
    }
  }
}
