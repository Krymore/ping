class PaddleAI{
  constructor() {
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.x = width - this.w;
    this.yspeed = 0;
  }


  update(puck) {
    var time = (width - puck.x)/puck.xspeed;
    var ypred = puck.y+time*puck.yspeed;
    var ychange = ypred - this.y;
    var speed = ychange/time+this.error();
    this.yspeed = this.assignspeed(speed);
    this.y += this.yspeed;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  assignspeed(speed){
    if (speed > 0){
      if(speed>2){
        return 2;
      }else{
        return speed;
      }
    }else{
      if(speed<=-2){
        return -2;
      }else{
        return speed;
      }
    }
  }

  error(){
    var error = random(100);
    if(error > 85){
    return random(2)-1;
  }else{
    return random(0.5)-1;
  }
  }




  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
