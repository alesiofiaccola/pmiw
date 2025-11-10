class Hoyo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.anchura = random(60, 90);
    this.vel = 3;
  }
  
  mover(){
    this.x -= this.vel;
    if(this.x + this.anchura < 0){
      this.x = width + random(270, 400);
      this.anchura = random(60, 90);
    }
  }

  dibujarHoyo() {
    fill(50);
    rect(this.x, this.y, this.anchura, height - this.y);
  }
}   
