class Hoyo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.anchura = random(30, 45);
    this.vel = 4;
  }
  
  mover(){
    this.x -= this.vel;
    if(this.x + this.anchura < 0){
      this.x = width + random(350, 400);
      this.anchura = random(30, 45);
    }
  }

  dibujarHoyo() {
    fill(50);
    image(imgHoyo,this.x, this.y, this.anchura, height - this.y);
  }
}   
