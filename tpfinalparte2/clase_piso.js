class Piso {
  constructor(x, y) {
   this.x = x;
   this.y = y;
   this.vel = 3.5;
   this.bloques = [];
   
      for(let i = 0; i < ceil(width / 480) + 1; i++){
      this.bloques.push({ x: i * 480, y: this.y })
    }
  }
  
  actualizar(){
    for(let bloque of this.bloques){
      bloque.x -= this.vel;
      if(bloque.x + 480 < 0){
        let maxX = max(this.bloques.map(b => b.x));
        bloque.x = maxX + 480;
      }
    }
  }

  dibujarPiso(){
    for(let bloque of this.bloques){
      image(imgPiso,bloque.x, bloque.y, 480, height - bloque.y);
    }
  }
}
